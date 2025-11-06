'use server'

import { searchBinalKnowledge as searchBinalCore } from "@/lib/rag-search"

// Resume-specific server actions to fetch data from the knowledge base
export async function getPersonalInfo() {
  try {
    const result = await searchBinalCore("Binal Shah personal information contact details email phone location")
    return {
      success: true,
      data: result.text
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch personal info'
    }
  }
}

export async function getProfessionalSummary() {
  try {
    const result = await searchBinalCore("professional summary Junior Data Analyst graduate experience")
    return {
      success: true,
      data: result.text
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch professional summary'
    }
  }
}

export async function getWorkExperience() {
  try {
    const result = await searchBinalCore("work experience AusBiz Consulting Zeus Street Greek Students for Liberty")
    return {
      success: true,
      data: result.text
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch work experience'
    }
  }
}

export async function getSkills() {
  try {
    const result = await searchBinalCore("technical skills Python SQL database programming languages")
    return {
      success: true,
      data: result.text
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch skills'
    }
  }
}

export async function getProjects() {
  try {
    const result = await searchBinalCore("projects Digital Twin Smart Attendance System portfolio")
    return {
      success: true,
      data: result.text
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch projects'
    }
  }
}

export async function getEducation() {
  try {
    const result = await searchBinalCore("education Bachelor Information Technology Victoria University graduation")
    return {
      success: true,
      data: result.text
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch education'
    }
  }
}

export async function getAchievements() {
  try {
    const result = await searchBinalCore("Binal Sheth achievements awards accomplishments recognition")
    return {
      success: true,
      data: result.text
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch achievements'
    }
  }
}

export async function getCertifications() {
  try {
    const result = await searchBinalCore("Binal Sheth certifications credentials certificates training")
    return {
      success: true,
      data: result.text
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch certifications'
    }
  }
}

// Comprehensive resume data fetch
export async function getFullResumeData() {
  try {
    const [
      personalInfo,
      summary,
      experience,
      skills,
      projects,
      education,
      achievements,
      certifications
    ] = await Promise.all([
      getPersonalInfo(),
      getProfessionalSummary(),
      getWorkExperience(),
      getSkills(),
      getProjects(),
      getEducation(),
      getAchievements(),
      getCertifications()
    ])

    return {
      success: true,
      data: {
        personalInfo: personalInfo.success ? personalInfo.data : null,
        summary: summary.success ? summary.data : null,
        experience: experience.success ? experience.data : null,
        skills: skills.success ? skills.data : null,
        projects: projects.success ? projects.data : null,
        education: education.success ? education.data : null,
        achievements: achievements.success ? achievements.data : null,
        certifications: certifications.success ? certifications.data : null,
      }
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch resume data'
    }
  }
}

// Search for specific information
export async function searchResumeData(query: string) {
  try {
    // Try multiple search strategies to find working entries
    const searchStrategies = [
      `${query} current`,  // Try with "current" suffix first
      `working ${query}`,  // Try with "working" prefix
      `${query} data analytics Python SQL`,  // Add specific terms
      query  // Fallback to original query
    ]
    
    for (const searchQuery of searchStrategies) {
      const result = await searchBinalCore(searchQuery)
      
      // Check if we got meaningful results (not just error messages)
      if (result.text && 
          !result.text.includes("No relevant information found") && 
          !result.text.includes("No content available") &&
          result.text.length > 100) {
        return {
          success: true,
          data: result.text
        }
      }
    }
    
    // If all strategies failed, return the last attempt
    const fallbackResult = await searchBinalCore(query)
    return {
      success: true,
      data: fallbackResult.text
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to search resume data'
    }
  }
}