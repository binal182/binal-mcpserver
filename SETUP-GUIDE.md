# Binal MCP Server - Complete Setup Guide

A Model Context Protocol (MCP) server that provides RAG (Retrieval-Augmented Generation) search capabilities for Binal's professional knowledge base using Upstash Vector database.

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Project Structure](#project-structure)
4. [Step-by-Step Setup](#step-by-step-setup)
5. [Environment Configuration](#environment-configuration)
6. [Development Process](#development-process)
7. [Testing the MCP Server](#testing-the-mcp-server)
8. [GitHub Repository Setup](#github-repository-setup)
9. [Troubleshooting](#troubleshooting)
10. [References](#references)

## 🎯 Project Overview

This project implements an MCP server that:
- Accepts user questions about Binal's professional background
- Searches an Upstash Vector database using RAG methodology
- Returns relevant information with relevance scores
- Provides both MCP API endpoints and Next.js server actions
- Built with TypeScript for strong type safety

### 🔗 Reference Projects
- **Roll Dice MCP Server**: [https://github.com/gocallum/rolldice-mcpserver.git](https://github.com/gocallum/rolldice-mcpserver.git) - Used as the architectural pattern
- **Binal Digital Twin (Python)**: [https://github.com/binal182/binal_digital-twin_py.git](https://github.com/binal182/binal_digital-twin_py.git) - Source of the RAG search logic

## 🛠 Prerequisites

Before starting, ensure you have:

- **Node.js** (v18 or higher)
- **PNPM** package manager
- **Windows PowerShell** (for Windows users)
- **Git** for version control
- **Upstash Vector Database** account and credentials
- **VS Code** (recommended IDE)

## 📁 Project Structure

```
binalmcp/
├── agents.md                    # Project requirements and instructions
├── package.json                 # Dependencies and scripts
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── components.json             # shadcn/ui configuration
├── test-mcp.js                 # MCP server testing script
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Landing page
│   ├── globals.css             # Global styles
│   ├── actions/
│   │   └── mcp-actions.ts      # Next.js server actions
│   └── api/
│       └── [transport]/
│           └── route.ts        # MCP API endpoints
├── lib/
│   ├── rag-search.ts          # Core RAG search logic
│   ├── utils.ts               # Utility functions
│   └── url-resolver.ts        # URL resolution utilities
├── components/
│   ├── ui/                    # shadcn/ui components
│   └── [custom-components]    # Custom React components
└── data/
    └── README.md              # Data documentation
```

## 🚀 Step-by-Step Setup

### Step 1: Initialize Next.js Project

```powershell
# Navigate to your desired directory
cd C:\Users\sbina

# Create new Next.js project
pnpm create next-app@latest binalmcp --typescript --tailwind --eslint --app --src-dir=false --turbopack --import-alias="@/*"

# Navigate to project directory
cd binalmcp
```

### Step 2: Install Core Dependencies

```powershell
# Install MCP and Upstash dependencies
pnpm add mcp-handler @upstash/vector zod

# Install UI dependencies
pnpm add @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-tabs
pnpm add class-variance-authority clsx lucide-react tailwind-merge

# Install development dependencies
pnpm add -D @tailwindcss/postcss tw-animate-css
```

### Step 3: Initialize shadcn/ui

```powershell
# Initialize shadcn/ui with default configuration
pnpm dlx shadcn@latest init

# Add required UI components
pnpm dlx shadcn@latest add button card input separator tabs badge
```

### Step 4: Create Core Files

#### 4.1 Create RAG Search Library (`lib/rag-search.ts`)

```typescript
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

    // Format results for consistent output
    if (!results || results.length === 0) {
      return {
        type: 'text' as const,
        text: `🔍 No relevant information found about "${validatedQuery}". Please try rephrasing your question or asking about Binal's professional background, skills, or experience.`
      }
    }

    // Extract and format the search results
    const formattedResults = results
      .filter(result => result.score && result.score > 0.7) // Filter by relevance score
      .map((result, index) => {
        const metadata = result.metadata || {}
        const content = metadata.text || metadata.content || "No content available"
        const source = metadata.source || metadata.title || "Unknown source"
        
        return `${index + 1}. **${source}**
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
```

#### 4.2 Create MCP API Route (`app/api/[transport]/route.ts`)

```typescript
// app/api/[transport]/route.ts
import { createMcpHandler } from "mcp-handler";
import { searchBinalKnowledge, searchBinalTool } from "@/lib/rag-search";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      searchBinalTool.name,
      searchBinalTool.description,
      searchBinalTool.schema,
      async ({ query }) => {
        // Use the shared RAG search logic
        const result = await searchBinalKnowledge(query);
        return {
          content: [result],
        };
      }
    );
  },
  {
    // Optional server options
  },
  {
    // No Redis config - disable Redis requirement
    basePath: "/api", // this needs to match where the [transport] is located.
    maxDuration: 60,
    verboseLogs: true,
  }
);

export { handler as GET, handler as POST };
```

#### 4.3 Create Server Actions (`app/actions/mcp-actions.ts`)

```typescript
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
```

#### 4.4 Create Test Script (`test-mcp.js`)

```javascript
const https = require('http');

// Test the MCP server
const testMcpServer = async () => {
  const postData = JSON.stringify({
    method: 'tools/call',
    params: {
      name: 'search_binal_knowledge',
      arguments: {
        query: 'tell me about yourself'
      }
    }
  });

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/api/mcp',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          resolve(result);
        } catch (e) {
          resolve(data);
        }
      });
    });

    req.on('error', (e) => {
      reject(e);
    });

    req.write(postData);
    req.end();
  });
};

// Run the test
testMcpServer()
  .then((result) => {
    console.log('MCP Server Response:');
    console.log(JSON.stringify(result, null, 2));
  })
  .catch((error) => {
    console.error('Error testing MCP server:', error);
  });
```

## 🔧 Environment Configuration

### Step 5: Create Environment File

Create a `.env.local` file in the project root:

```env
# Upstash Vector Database Configuration
UPSTASH_VECTOR_REST_URL=your_upstash_vector_url_here
UPSTASH_VECTOR_REST_TOKEN=your_upstash_vector_token_here
```

### Step 6: Update Package.json Scripts

Ensure your `package.json` has the correct scripts:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint",
    "test:mcp": "node test-mcp.js"
  }
}
```

## 👨‍💻 Development Process

### Step 7: Start Development Server

```powershell
# Start the Next.js development server
pnpm dev
```

The server will start on `http://localhost:3000`

### Step 8: Test the MCP Server

In a new PowerShell terminal:

```powershell
# Test the MCP server
pnpm test:mcp

# Or run directly
node test-mcp.js
```

Expected response:
```json
{
  "result": {
    "content": [
      {
        "type": "text",
        "text": "🔍 **Search Results for \"tell me about yourself\"**\n\n1. **Professional Background**\n[Relevant content about Binal]\n*Relevance: 85.2%*\n\n---\n*Found 1 relevant result(s) from Binal's knowledge base.*"
      }
    ]
  }
}
```

## 📚 GitHub Repository Setup

### Step 9: Initialize Git Repository

```powershell
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Binal MCP Server setup"

# Add remote origin (replace with your GitHub repository URL)
git remote add origin https://github.com/binal182/binal-mcpserver.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 10: Create Additional Documentation

#### Create `agents.md` (Project Requirements)
```markdown
https://github.com/gocallum/rolldice-mcpserver.git : It is a roll dice mcp server we want to use same technology and same pattern to create our own mcp server.
https://github.com/binal182/binal_digital-twin_py.git  it is python code using upstash vector to search the RAG and we use groq and llama to provide the generations. 
the purpose of this app is to build the mcp server using the roll dice pattern.

. mcp server will accept the user question about binal 
.create a server action which will searches upstash vector data base and returns the RAG results. the logic to search will be exactly the same as python version.
use the following environment variables in .env
UPSTASH_VECTOR_REST_URL=
UPSTASH_VECTOR_REST_TOKEN=

important references to study:
https://upstash.com/docs/vector/overall/getstarted
https://upstash.com/docs/vector/features/embeddingmodels information about how to access the upstash database and use the built in embedding models.
example of how to use upstash to do a rag search:
import { Index } from "@upstash/vector"

const index = new Index({
  url: "UPSTASH_VECTOR_REST_URL",
  token: "UPSTASH_VECTOR_REST_TOKEN",
})

await index.query({
  data: "What is Upstash?",
  topK: 1,
  includeMetadata: true,
})
links to using the upstash sdk 
https://upstash.com/docs/vector/sdks/ts/getting-started
additional instructions:
always use server actions where possible.
always use pnpm.
always use windows powershell commands.
always have strong typesafety.
i am using nextjs15.5.2
use pnpm dlx shadcn@latest init https://ui.shadcn.com/docs/installation/next
```

### Step 11: Update .gitignore

Ensure your `.gitignore` includes:

```gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

# turbopack
.turbo/
```

## 🔧 Troubleshooting

### Common Issues and Solutions

#### 1. Environment Variables Not Loading
```powershell
# Verify environment file exists
Get-Content .env.local

# Restart development server
pnpm dev
```

#### 2. Upstash Connection Issues
```typescript
// Test connection manually
import { checkVectorConnection } from "@/lib/rag-search"

const result = await checkVectorConnection()
console.log(result)
```

#### 3. MCP Handler Errors
- Ensure the API route path matches the handler configuration
- Check that all required dependencies are installed
- Verify the tool schema matches the implementation

#### 4. TypeScript Errors
```powershell
# Check TypeScript configuration
npx tsc --noEmit

# Update dependencies
pnpm update
```

## 📖 References

### Key Documentation
- **MCP Handler**: [NPM Package](https://www.npmjs.com/package/mcp-handler)
- **Upstash Vector**: [Getting Started](https://upstash.com/docs/vector/overall/getstarted)
- **Upstash TypeScript SDK**: [Documentation](https://upstash.com/docs/vector/sdks/ts/getting-started)
- **Upstash Embedding Models**: [Features](https://upstash.com/docs/vector/features/embeddingmodels)
- **Next.js 15**: [Documentation](https://nextjs.org/docs)
- **shadcn/ui**: [Installation Guide](https://ui.shadcn.com/docs/installation/next)

### Technology Stack
- **Framework**: Next.js 15.5.2 with Turbopack
- **Language**: TypeScript 5+
- **Package Manager**: PNPM
- **Vector Database**: Upstash Vector
- **Validation**: Zod
- **UI Components**: shadcn/ui with Radix UI
- **Styling**: Tailwind CSS 4

### Project Patterns
- **Server Actions**: For Next.js API interactions
- **Shared Logic**: Reusable RAG search functions
- **Type Safety**: Strong TypeScript typing throughout
- **Error Handling**: Comprehensive error management
- **Environment Configuration**: Secure credential management

---

## 🎉 Conclusion

This MCP server successfully integrates:
- Upstash Vector database for RAG search capabilities
- Next.js 15 with server actions and API routes
- TypeScript for type safety
- MCP protocol for AI model integration
- Comprehensive testing and documentation

The server is now ready for deployment and can be integrated with AI models that support the Model Context Protocol.

### Next Steps
1. Deploy to Vercel or similar platform
2. Add more sophisticated RAG logic
3. Implement caching for improved performance
4. Add user authentication if needed
5. Extend with additional tools and capabilities

**Created by**: Binal
**Date**: September 13, 2025
**Repository**: [https://github.com/binal182/binal-mcpserver](https://github.com/binal182/binal-mcpserver)