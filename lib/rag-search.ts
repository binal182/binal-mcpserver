import { z } from "zod"
import { Index } from "@upstash/vector"

// Shared Zod schema for RAG search query validation
export const ragSearchSchema = z.string().min(1, "Query cannot be empty").max(500, "Query too long")

// Initialize Upstash Vector client
function getVectorClient() {
  const url = process.env.UPSTASH_VECTOR_REST_URL
  const token = process.env.UPSTASH_VECTOR_REST_TOKEN

  if (!url || !token) {
    throw new Error("Missing Upstash Vector configuration. Please set UPSTASH_VECTOR_REST_URL and UPSTASH_VECTOR_REST_TOKEN in your environment variables.")
  }

  return new Index({
    url,
    token,
  })
}

// Shared RAG search logic used by both MCP handler and server actions
export async function searchBinalKnowledge(query: string) {
  // Validate input using the shared schema
  const validatedQuery = ragSearchSchema.parse(query)
  
  try {
    const index = getVectorClient()
    
    // Perform vector search with metadata
    const results = await index.query({
      data: validatedQuery,
      topK: 5, // Get top 5 most relevant results
      includeMetadata: true,
    })

    console.log(`🔍 Query: "${validatedQuery}" - Found ${results?.length || 0} results`)

    // Format results for consistent output
    if (!results || results.length === 0) {
      console.log('❌ No results returned from database')
      return {
        type: 'text' as const,
        text: `🔍 No relevant information found about "${validatedQuery}". Please try rephrasing your question or asking about Binal's professional background, skills, or experience.`
      }
    }

    // Log raw results for debugging
    results.forEach((result, i) => {
      const content = result.metadata?.content || result.data || 'No content'
      console.log(`Result ${i + 1}: Score=${result.score}, Content length=${content.length}, Preview="${content.substring(0, 100)}..."`)
    })

    // Extract and format the search results
    const validResults = results
      .filter(result => {
        // Filter out results with no content
        const metadata = result.metadata || {}
        const content = metadata.content || 
                       metadata.text || 
                       result.data || 
                       result.content || 
                       metadata.data
        
        // Only include results that have actual content and good relevance
        const isValid = content && 
               content !== "No content available" && 
               content.length > 20 && 
               result.score && 
               result.score > 0.7
        
        if (!isValid) {
          console.log(`❌ Filtered out result: score=${result.score}, content length=${content?.length || 0}`)
        }
        
        return isValid
      })
      .slice(0, 3) // Take only top 3 valid results
    
    console.log(`✅ Valid results after filtering: ${validResults.length}`)

    const formattedResults = validResults
      .map((result, index) => {
        const metadata = result.metadata || {}
        // Prioritize metadata.content since that's what works in Upstash
        const content = metadata.content || 
                       metadata.text || 
                       result.data || 
                       result.content || 
                       metadata.data ||
                       "No content available - please check database"
        
        const source = metadata.source || metadata.category || "Unknown source"
        const category = metadata.category || ""
        
        return `${index + 1}. **${source}**${category ? ` (${category})` : ""}
${content}
*Relevance: ${(result.score * 100).toFixed(1)}%*`
      })

    if (formattedResults.length === 0) {
      return {
        type: 'text' as const,
        text: `🔍 Found ${results.length} results for "${validatedQuery}", but none were highly relevant. Please try being more specific about what you'd like to know about Binal.`
      }
    }

    const responseText = `🔍 **Search Results for "${validatedQuery}"**

${formattedResults.join('\n\n')}

---
*Found ${formattedResults.length} relevant result(s) from Binal's knowledge base.*`

    return {
      type: 'text' as const,
      text: responseText
    }
  } catch (error) {
    console.error('RAG search error:', error)
    return {
      type: 'text' as const,
      text: `❌ Error searching Binal's knowledge base: ${error instanceof Error ? error.message : 'Unknown error occurred'}. Please check your Upstash Vector configuration.`
    }
  }
}

// Tool definition that can be reused
export const searchBinalTool = {
  name: 'search_binal_knowledge',
  description: 'Search through Binal\'s professional knowledge base using RAG (Retrieval-Augmented Generation). Ask questions about Binal\'s background, skills, experience, projects, or expertise.',
  schema: {
    query: ragSearchSchema,
  }
} as const

// Health check function
export async function checkVectorConnection() {
  try {
    const index = getVectorClient()
    // Try a simple query to test connection
    await index.query({
      data: "test",
      topK: 1,
      includeMetadata: false,
    })
    return { connected: true, error: null }
  } catch (error) {
    return { 
      connected: false, 
      error: error instanceof Error ? error.message : 'Unknown connection error' 
    }
  }
}