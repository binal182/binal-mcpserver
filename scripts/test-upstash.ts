import { Index } from "@upstash/vector"
import { readFileSync } from "fs"
import { resolve } from "path"

// Load environment variables
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
  console.log("✅ Loaded .env.local")
} catch (error) {
  console.error("❌ Error loading .env.local")
  process.exit(1)
}

async function testUpstash() {
  const url = process.env.UPSTASH_VECTOR_REST_URL
  const token = process.env.UPSTASH_VECTOR_REST_TOKEN

  if (!url || !token) {
    console.error("❌ Missing credentials")
    process.exit(1)
  }

  const index = new Index({ url, token })

  try {
    // Get index info
    console.log("📊 Getting index info...")
    const info = await index.info()
    console.log("Index info:", JSON.stringify(info, null, 2))

    // Try a test query
    console.log("\n🔍 Testing query...")
    const results = await index.query({
      data: "Where does Binal live?",
      topK: 1,
      includeMetadata: true
    })
    console.log(`Found ${results.length} results`)
    if (results[0]?.metadata) {
      console.log("Content:", results[0].metadata)
    }

  } catch (error: any) {
    console.error("❌ Error:", error.message)
    console.error("Full error:", error)
  }
}

testUpstash()
