'use server'

import { searchBinalKnowledge as searchBinalCore, searchBinalTool, checkVectorConnection } from "@/lib/rag-search"

// Server action that uses the shared RAG search logic
export async function searchBinalKnowledge(query: string) {
  try {
    const result = await searchBinalCore(query)
    
    return {
      success: true,
      result: {
        content: [result]
      }
    }
  } catch (error) {
    return {
      success: false,
      error: {
        code: -32602,
        message: error instanceof Error ? error.message : 'Invalid query parameters'
      }
    }
  }
}

export async function listTools() {
  return {
    success: true,
    result: {
      tools: [
        {
          name: searchBinalTool.name,
          description: searchBinalTool.description,
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'Your question about Binal (1-500 characters)',
                minLength: 1,
                maxLength: 500
              }
            },
            required: ['query']
          }
        }
      ]
    }
  }
}

export async function checkConnection() {
  try {
    const result = await checkVectorConnection()
    return {
      success: true,
      result
    }
  } catch (error) {
    return {
      success: false,
      error: {
        message: error instanceof Error ? error.message : 'Connection check failed'
      }
    }
  }
}