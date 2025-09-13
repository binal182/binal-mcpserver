# Binal Digital Twin Knowledge Base

This directory contains sample data and scripts for populating the Upstash Vector database with Binal's professional information.

## Sample Data Structure

Each entry in the vector database should have:
- **text/content**: The main content to be searched
- **metadata**: Additional information like source, category, etc.
- **vector**: The embedding (generated automatically by Upstash)

## Example Data Points

```typescript
const sampleData = [
  {
    id: "education-1",
    text: "Binal has a Master's degree in Computer Science with specialization in Machine Learning and Artificial Intelligence. Graduated with distinction from a top-tier university.",
    metadata: {
      category: "education",
      source: "Academic Records",
      importance: "high"
    }
  },
  {
    id: "skills-python-1", 
    text: "Binal is highly proficient in Python programming with 5+ years of experience. Expert in libraries like pandas, numpy, scikit-learn, TensorFlow, and PyTorch for data science and machine learning projects.",
    metadata: {
      category: "technical_skills",
      source: "Professional Portfolio",
      skills: ["Python", "Machine Learning", "Data Science"],
      importance: "high"
    }
  },
  {
    id: "projects-rag-1",
    text: "Binal built a sophisticated RAG (Retrieval-Augmented Generation) system using vector databases, embedding models, and large language models. The project demonstrates expertise in modern AI architectures.",
    metadata: {
      category: "projects",
      source: "GitHub Portfolio",
      technologies: ["RAG", "Vector Databases", "LLMs", "Embeddings"],
      importance: "high"
    }
  },
  {
    id: "experience-ml-1",
    text: "Binal has extensive experience in machine learning model development, from data preprocessing to model deployment. Worked on various ML projects including NLP, computer vision, and predictive analytics.",
    metadata: {
      category: "experience", 
      source: "Work Portfolio",
      domain: ["NLP", "Computer Vision", "Predictive Analytics"],
      importance: "high"
    }
  }
];
```

## Setup Instructions

1. Create an Upstash Vector database at https://upstash.com/
2. Get your REST URL and Token
3. Add them to your `.env.local` file:
   ```
   UPSTASH_VECTOR_REST_URL=your_url_here
   UPSTASH_VECTOR_REST_TOKEN=your_token_here
   ```
4. Use the Upstash console or API to upload your data
5. Test the connection using the MCP server interface

## Data Population Script

You can create a simple script to populate the database:

```typescript
import { Index } from "@upstash/vector";

const index = new Index({
  url: process.env.UPSTASH_VECTOR_REST_URL!,
  token: process.env.UPSTASH_VECTOR_REST_TOKEN!,
});

async function populateDatabase() {
  for (const item of sampleData) {
    await index.upsert({
      id: item.id,
      data: item.text,
      metadata: item.metadata,
    });
  }
}
```

## Tips for Better Search Results

1. **Comprehensive Coverage**: Include information about education, skills, projects, experience, certifications, etc.
2. **Clear Descriptions**: Write clear, specific descriptions that answer common questions
3. **Rich Metadata**: Include categories, importance levels, and relevant tags
4. **Natural Language**: Write in natural language that matches how people ask questions
5. **Regular Updates**: Keep the knowledge base updated with new experiences and skills