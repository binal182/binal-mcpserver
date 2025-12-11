import { Index } from "@upstash/vector"
import { personalInfo, technicalSkills, skills, workExperience, extracurricularExperience, projects, education, leadershipAchievements, references, skillsMetrics } from "../lib/resume-data"
import { readFileSync } from "fs"
import { resolve } from "path"

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

// Initialize Upstash Vector client
function getVectorClient() {
  const url = process.env.UPSTASH_VECTOR_REST_URL
  const token = process.env.UPSTASH_VECTOR_REST_TOKEN

  if (!url || !token) {
    throw new Error("Missing Upstash Vector configuration. Please set UPSTASH_VECTOR_REST_URL and UPSTASH_VECTOR_REST_TOKEN in .env.local")
  }

  // Initialize with embedding model configuration
  return new Index({ 
    url, 
    token,
    // Let the server handle embeddings automatically
  })
}

async function updateVectorDatabase() {
  console.log("🚀 Starting Upstash Vector Database Update...")
  
  try {
    const index = getVectorClient()
    console.log("✅ Connected to Upstash Vector Database")

    // Note: Not using reset() to preserve index configuration with embedding model
    // Upsert will update existing IDs or add new ones
    console.log("📝 Updating records (will overwrite existing IDs)...")

    // Create chunks from updated resume data
    const chunks: any[] = []

    // Personal Info - Multiple chunks for different aspects
    chunks.push({
      id: "personal-info",
      data: `${personalInfo.name} - ${personalInfo.title}: ${personalInfo.subtitle}. Located in ${personalInfo.location}. ${personalInfo.summary}`,
      metadata: {
        content: `${personalInfo.name} is a ${personalInfo.title} specializing in ${personalInfo.subtitle}. Located in ${personalInfo.location}. Contact: ${personalInfo.contact.email}, ${personalInfo.contact.phone}. ${personalInfo.summary}`,
        source: "Personal Information",
        category: "Overview"
      }
    })

    chunks.push({
      id: "elevator-pitch",
      data: personalInfo.elevatorPitch,
      metadata: {
        content: `Elevator Pitch: ${personalInfo.elevatorPitch}`,
        source: "Personal Information",
        category: "Overview"
      }
    })

    chunks.push({
      id: "career-objective",
      data: `Career Objective: ${personalInfo.careerObjective}`,
      metadata: {
        content: `Career path: ${personalInfo.careerObjective}`,
        source: "Personal Information",
        category: "Career Goals"
      }
    })

    chunks.push({
      id: "visa-status",
      data: `Visa: ${personalInfo.visaStatus.current}, expires ${personalInfo.visaStatus.expiry}. Work rights: ${personalInfo.visaStatus.workRights}`,
      metadata: {
        content: `Visa Status: ${personalInfo.visaStatus.current} expiring ${personalInfo.visaStatus.expiry}. Work rights: ${personalInfo.visaStatus.workRights}`,
        source: "Personal Information",
        category: "Legal Status"
      }
    })

    chunks.push({
      id: "availability",
      data: `Availability: ${personalInfo.availability.currentStatus}. Start date: ${personalInfo.availability.startDate}`,
      metadata: {
        content: `Availability: ${personalInfo.availability.currentStatus}. Can start: ${personalInfo.availability.startDate}. Flexible schedule: ${personalInfo.availability.flexibleSchedule}`,
        source: "Personal Information",
        category: "Availability"
      }
    })

    chunks.push({
      id: "salary-expectations",
      data: `Salary expectations: ${personalInfo.salaryExpectations.target} ${personalInfo.salaryExpectations.currency}, minimum ${personalInfo.salaryExpectations.minimum}`,
      metadata: {
        content: `Salary: Target ${personalInfo.salaryExpectations.target} ${personalInfo.salaryExpectations.currency}, negotiable: ${personalInfo.salaryExpectations.negotiable}`,
        source: "Personal Information",
        category: "Compensation"
      }
    })

    // Work Experience
    workExperience.forEach((job, i) => {
      chunks.push({
        id: `work-${i}`,
        data: `${job.position} at ${job.company} (${job.duration}, ${job.location}). ${job.description}`,
        metadata: {
          content: `${job.position} at ${job.company}, ${job.location} (${job.duration}). ${job.description} Achievements: ${job.achievements.join(". ")}`,
          source: job.company,
          category: "Work Experience"
        }
      })
    })

    // Extracurricular
    extracurricularExperience.forEach((exp, i) => {
      chunks.push({
        id: `extra-${i}`,
        data: `${exp.position} at ${exp.company} (${exp.duration}). ${exp.description}`,
        metadata: {
          content: `${exp.position} at ${exp.company}: ${exp.description} Impact: ${exp.impact}`,
          source: exp.company,
          category: "Leadership"
        }
      })
    })

    // Skills
    skills.technical.forEach((cat, i) => {
      chunks.push({
        id: `skill-${i}`,
        data: `${cat.category}: ${cat.skills.map(s => s.name).join(", ")}`,
        metadata: {
          content: `Technical skills in ${cat.category}: ${cat.skills.map(s => `${s.name} (${s.proficiency})`).join(", ")}`,
          source: "Technical Skills",
          category: cat.category
        }
      })
    })

    // Projects
    projects.forEach((proj, i) => {
      chunks.push({
        id: `project-${i}`,
        data: `${proj.name} - ${proj.description}`,
        metadata: {
          content: `Project: ${proj.name}. ${proj.description} Outcomes: ${proj.outcomes.join(". ")}`,
          source: proj.name,
          category: "Projects"
        }
      })
    })

    // Education
    education.forEach((edu, i) => {
      chunks.push({
        id: `edu-${i}`,
        data: `${edu.degree} from ${edu.institution}, ${edu.location}. Graduated ${edu.graduation}`,
        metadata: {
          content: `Education: ${edu.degree} in ${edu.field} from ${edu.institution}, ${edu.location}. Graduated ${edu.graduation}. ${edu.relevantCoursework ? 'Coursework: ' + edu.relevantCoursework.join(', ') : ''}`,
          source: edu.institution,
          category: "Education"
        }
      })
    })

    // Leadership Achievements
    leadershipAchievements.forEach((achievement, i) => {
      chunks.push({
        id: `leadership-${i}`,
        data: `${achievement.achievement}`,
        metadata: {
          content: `Leadership Achievement: ${achievement.achievement}. Impact: ${achievement.impact}`,
          source: "Leadership Experience",
          category: "Leadership"
        }
      })
    })

    // References
    references.forEach((ref, i) => {
      chunks.push({
        id: `reference-${i}`,
        data: `Reference: ${ref.name}, ${ref.title} at ${ref.company}. Relationship: ${ref.relationship}`,
        metadata: {
          content: `Reference: ${ref.name} (${ref.title} at ${ref.company}). Relationship: ${ref.relationship}. Contact: ${ref.contact}`,
          source: ref.company,
          category: "References"
        }
      })
    })

    // Technical Skills - Detailed breakdown
    Object.entries(technicalSkills).forEach(([category, skillsList], i) => {
      chunks.push({
        id: `tech-skill-${i}`,
        data: `${category}: ${Array.isArray(skillsList) ? skillsList.join(', ') : skillsList}`,
        metadata: {
          content: `Technical expertise in ${category}: ${Array.isArray(skillsList) ? skillsList.join(', ') : skillsList}`,
          source: "Technical Skills",
          category: category
        }
      })
    })

    // Skills Metrics - Technical
    skillsMetrics.technical.forEach((skill, i) => {
      chunks.push({
        id: `skill-metric-tech-${i}`,
        data: `${skill.name}: ${skill.description}`,
        metadata: {
          content: `Skill: ${skill.name} (${skill.category}). ${skill.description} Source: ${skill.source}`,
          source: skill.source,
          category: "Skills Development"
        }
      })
    })

    // Skills Metrics - Leadership
    skillsMetrics.leadership.forEach((skill, i) => {
      chunks.push({
        id: `skill-metric-leadership-${i}`,
        data: `${skill.name}: ${skill.description}`,
        metadata: {
          content: `Leadership Skill: ${skill.name} (${skill.category}). ${skill.description} Source: ${skill.source}`,
          source: skill.source,
          category: "Leadership Development"
        }
      })
    })

    // Skills Metrics - Business
    skillsMetrics.business.forEach((skill, i) => {
      chunks.push({
        id: `skill-metric-business-${i}`,
        data: `${skill.name}: ${skill.description}`,
        metadata: {
          content: `Business Skill: ${skill.name} (${skill.category}). ${skill.description} Source: ${skill.source}`,
          source: skill.source,
          category: "Business Skills"
        }
      })
    })

    console.log(`📦 Created ${chunks.length} data chunks`)

    // Upload in batches
    const BATCH_SIZE = 10
    for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
      const batch = chunks.slice(i, i + BATCH_SIZE)
      console.log(`⬆️  Uploading batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(chunks.length / BATCH_SIZE)}...`)
      await index.upsert(batch)
    }

    console.log("✅ Upload complete!")
    console.log(`📊 Total chunks uploaded: ${chunks.length}`)

    // Test query
    console.log("\n🔍 Testing search...")
    const testResults = await index.query({
      data: "Where does Binal live?",
      topK: 3,
      includeMetadata: true
    })
    
    console.log(`✅ Search test successful! Found ${testResults.length} results`)
    if (testResults.length > 0 && testResults[0].metadata) {
      console.log("Sample result:", (testResults[0].metadata.content as string)?.substring(0, 150) + "...")
    }

  } catch (error) {
    console.error("❌ Error during update:", error)
    throw error
  }
}

updateVectorDatabase()
  .then(() => {
    console.log("\n✨ Database updated successfully!")
    process.exit(0)
  })
  .catch((error) => {
    console.error("\n❌ Update failed:", error)
    process.exit(1)
  })
