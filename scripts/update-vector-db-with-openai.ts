import { Index } from "@upstash/vector"
import { personalInfo, workExperience, extracurricularExperience, skills, projects, education } from "../lib/resume-data"
import { readFileSync } from "fs"
import { resolve } from "path"
import OpenAI from "openai"

// Load environment variables from .env.local
try {
  const envPath = resolve(process.cwd(), '.env.local')
  const envContent = readFileSync(envPath, 'utf-8')
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/)
    if (match) {
      const key = match[1].trim()
      const value = match[2].trim().replace(/^["'](.*)["']$/, '$1')
      process.env[key] = value
    }
  })
  console.log("✅ Loaded environment variables from .env.local")
} catch (error) {
  console.warn("⚠️  Could not load .env.local file")
}

// Initialize clients
function getVectorClient() {
  const url = process.env.UPSTASH_VECTOR_REST_URL
  const token = process.env.UPSTASH_VECTOR_REST_TOKEN

  if (!url || !token) {
    throw new Error("Missing Upstash Vector configuration")
  }

  return new Index({ url, token })
}

function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    throw new Error("Missing OpenAI API key")
  }
  return new OpenAI({ apiKey })
}

// Generate embeddings using OpenAI
async function generateEmbedding(text: string): Promise<number[]> {
  const openai = getOpenAIClient()
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  })
  return response.data[0].embedding
}

async function updateVectorDatabase() {
  console.log("🚀 Starting Upstash Vector Database Update with OpenAI Embeddings...")
  
  try {
    const index = getVectorClient()
    console.log("✅ Connected to Upstash Vector Database")

    // Create chunks from updated resume data
    const textChunks: Array<{id: string, text: string, metadata: any}> = []

    // Personal Info
    textChunks.push({
      id: "personal-info",
      text: `${personalInfo.name} - ${personalInfo.title}: ${personalInfo.subtitle}. Located in ${personalInfo.location}. ${personalInfo.summary}`,
      metadata: {
        content: `${personalInfo.name} is a ${personalInfo.title} specializing in ${personalInfo.subtitle}. Located in ${personalInfo.location}. Contact: ${personalInfo.contact.email}, ${personalInfo.contact.phone}. ${personalInfo.summary}`,
        source: "Personal Information",
        category: "Overview"
      }
    })

    // Work Experience
    workExperience.forEach((job, i) => {
      textChunks.push({
        id: `work-${i}`,
        text: `${job.position} at ${job.company} (${job.duration}, ${job.location}). ${job.description}`,
        metadata: {
          content: `${job.position} at ${job.company}, ${job.location} (${job.duration}). ${job.description} Achievements: ${job.achievements.join(". ")}`,
          source: job.company,
          category: "Work Experience"
        }
      })
    })

    // Extracurricular
    extracurricularExperience.forEach((exp, i) => {
      textChunks.push({
        id: `extra-${i}`,
        text: `${exp.role} at ${exp.organization} (${exp.duration}). ${exp.description}`,
        metadata: {
          content: `${exp.role} at ${exp.organization} (${exp.duration}). ${exp.description} Achievements: ${exp.achievements.join(". ")}`,
          source: exp.organization,
          category: "Extracurricular"
        }
      })
    })

    // Skills
    const skillCategories = Object.entries(skills)
    skillCategories.forEach(([category, skillList], i) => {
      const skillNames = skillList.map(s => s.name).join(", ")
      textChunks.push({
        id: `skills-${i}`,
        text: `${category}: ${skillNames}`,
        metadata: {
          content: `Technical skills in ${category}: ${skillNames}`,
          source: "Skills",
          category: "Skills"
        }
      })
    })

    // Projects
    projects.forEach((proj, i) => {
      textChunks.push({
        id: `project-${i}`,
        text: `${proj.name} - ${proj.description}`,
        metadata: {
          content: `Project: ${proj.name}. ${proj.description} Outcomes: ${proj.outcomes.join(". ")}`,
          source: proj.name,
          category: "Projects"
        }
      })
    })

    // Education
    education.forEach((edu, i) => {
      textChunks.push({
        id: `edu-${i}`,
        text: `${edu.degree} from ${edu.institution}, ${edu.location}. Graduated ${edu.graduation}`,
        metadata: {
          content: `Education: ${edu.degree} in ${edu.field} from ${edu.institution}, ${edu.location}. Graduated ${edu.graduation}.`,
          source: edu.institution,
          category: "Education"
        }
      })
    })

    console.log(`📦 Created ${textChunks.length} text chunks`)
    console.log("🔄 Generating embeddings with OpenAI...")

    // Generate embeddings and prepare vectors
    const vectors: Array<{id: string, vector: number[], metadata: any}> = []
    
    for (let i = 0; i < textChunks.length; i++) {
      const chunk = textChunks[i]
      console.log(`  Embedding ${i + 1}/${textChunks.length}: ${chunk.id}`)
      const embedding = await generateEmbedding(chunk.text)
      vectors.push({
        id: chunk.id,
        vector: embedding,
        metadata: chunk.metadata
      })
      // Small delay to avoid rate limits
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    console.log("✅ All embeddings generated")

    // Upload in batches
    const BATCH_SIZE = 10
    for (let i = 0; i < vectors.length; i += BATCH_SIZE) {
      const batch = vectors.slice(i, i + BATCH_SIZE)
      console.log(`⬆️  Uploading batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(vectors.length / BATCH_SIZE)}...`)
      await index.upsert(batch)
    }

    console.log("✅ Upload complete!")
    console.log(`📊 Total vectors uploaded: ${vectors.length}`)

    // Test query
    console.log("\n🔍 Testing search...")
    const testEmbedding = await generateEmbedding("Where does Binal live?")
    const testResults = await index.query({
      vector: testEmbedding,
      topK: 3,
      includeMetadata: true
    })
    
    console.log(`✅ Search test successful! Found ${testResults.length} results`)
    if (testResults.length > 0 && testResults[0].metadata) {
      console.log("Sample result:", (testResults[0].metadata.content as string)?.substring(0, 150) + "...")
    }

    console.log("\n✅ Database update completed successfully!")
    
  } catch (error: any) {
    console.error("❌ Error during update:", error)
    throw error
  }
}

// Run the update
updateVectorDatabase()
  .then(() => {
    console.log("✅ Update script finished")
    process.exit(0)
  })
  .catch((error) => {
    console.error("❌ Update failed:", error)
    process.exit(1)
  })
