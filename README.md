# Binal's AI-Powered Resume Platform

A modern, interactive resume website with AI-powered chat functionality using Next.js 15, Upstash Vector Database, and MCP (Model Context Protocol) integration for Claude Desktop.

## 🚀 Features

- **📱 Professional Resume Website**: Modern, responsive design optimized for recruiters
- **🤖 Interactive AI Chat**: Ask questions about Binal's background, skills, and experience
- **🔍 RAG-Powered Search**: Vector database search through comprehensive professional data
- **🖨️ Print-Optimized**: Professional PDF generation for download
- **💻 MCP Integration**: Claude Desktop integration for advanced AI interactions

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 with React 19, Tailwind CSS, shadcn/ui
- **Backend**: Upstash Vector Database for RAG search
- **AI Integration**: Claude Sonnet via MCP protocol
- **Deployment**: Vercel-ready configuration

## 📁 Project Structure

```
binalmcp/
├── app/
│   ├── actions/          # Server actions for database and MCP
│   ├── api/             # MCP API route
│   ├── resume/          # Professional resume page
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main landing page
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── interactive-resume.tsx
│   ├── mcp-setup-guide.tsx
│   └── test-rag-search.tsx
├── lib/
│   └── rag-search.ts    # Vector database search logic
├── .env.local           # Environment variables
└── package.json
```

## 🔧 Setup & Installation

### Prerequisites
- Node.js 18+ 
- pnpm package manager
- Upstash Vector Database account

### 1. Environment Setup
Create `.env.local` with your Upstash credentials:
```env
UPSTASH_VECTOR_REST_URL="your_upstash_vector_url"
UPSTASH_VECTOR_REST_TOKEN="your_upstash_vector_token"
OPENAI_API_KEY="your_openai_api_key"
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Populate Database
The database is already populated with Binal's professional data. To repopulate if needed, use the MCP Setup Guide on the website.

### 4. Run Development Server
```bash
pnpm dev
```

Visit `http://localhost:3000` to see the application.

## 🏗️ How It Works

This application uses **mcp-handler** and **Upstash Vector** to provide seamless RAG-powered search integration between web applications and AI assistants like Claude Desktop.

### Architecture

```
Claude Desktop → Transport Protocol → /api/[transport] → Shared RAG Logic (/lib/rag-search.ts)
Web Interface → Server Actions → Shared RAG Logic (/lib/rag-search.ts)
                                      ↓
                               Upstash Vector Database
```

1. **Claude Desktop** connects via various transport protocols (SSE, stdio, etc.)
2. **Transport Layer** handles the MCP protocol communication
3. **MCP Handler** processes tool calls and invokes shared RAG search logic
4. **RAG Search** (`/lib/rag-search.ts`) contains vector search and result formatting
5. **Upstash Vector** provides semantic search capabilities with embeddings
6. **Server Actions** (for web) call the same shared RAG logic directly

### Key Components

- **`lib/rag-search.ts`**: Shared RAG search logic, schema, and tool definitions
- **`app/api/[transport]/route.ts`**: MCP server endpoint using mcp-handler + shared logic
- **`app/actions/mcp-actions.ts`**: Server actions that use the shared RAG search logic
- **`app/page.tsx`**: Beautiful web interface with setup instructions and testing
- **`components/`**: Reusable shadcn/ui components for the interface
- **`data/`**: Sample data structure and population guidelines

### Web Interface Benefits

The web interface uses **Next.js Server Actions** that import the same shared logic as the MCP server:
- ✅ Same Zod schema validation (`lib/rag-search.ts`)
- ✅ Identical search algorithm (single `searchBinalKnowledge()` function)
- ✅ Consistent output formatting (same result structure)
- ✅ Shared tool definitions (same name, description, schema)
- ✅ True single source of truth architecture
- **MCP Tools**: `search_binal_knowledge` tool with Zod validation for parameters

## 🚀 Deployment to Vercel

### Option 1: Deploy Button (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/binal182/binalmcp)

### Option 2: Manual Deployment

1. **Connect to Vercel**:
   ```bash
   pnpm i -g vercel
   vercel
   ```

2. **Add Environment Variables**:
   In your Vercel dashboard, add:
   - `UPSTASH_VECTOR_REST_URL`
   - `UPSTASH_VECTOR_REST_TOKEN`

3. **Update Claude Desktop Config**:
   Replace `http://localhost:3000` with your Vercel URL:
   ```json
   {
     "mcpServers": {
       "binal-digital-twin": {
         "command": "npx",
         "args": [
           "-y",
           "mcp-remote",
           "https://your-app.vercel.app/api/mcp"
         ]
       }
     }
   }
   ```

4. **Restart Claude Desktop** to use the deployed version

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/) components
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with CSS variables
- **Vector Database**: [Upstash Vector](https://upstash.com/docs/vector) for RAG search
- **MCP Integration**: [mcp-handler](https://www.npmjs.com/package/mcp-handler) for HTTP-based MCP protocol
- **MCP Bridge**: [mcp-remote](https://www.npmjs.com/package/mcp-remote) for Claude Desktop connectivity
- **Validation**: [Zod](https://zod.dev/) for type-safe parameter validation
- **Icons**: [Lucide React](https://lucide.dev/) for beautiful icons
- **Deployment**: [Vercel](https://vercel.com/) platform

## 🎯 Use Cases

- **🎤 Technical Interviews**: Learn about Binal's technical expertise and experience
- **🤝 Project Collaboration**: Understand Binal's skills for team projects
- **🌐 Professional Networking**: Get to know Binal's background and interests
- **📊 Skill Assessment**: Evaluate technical competencies and experience levels
- **🤖 AI-Powered CV**: Interactive resume experience via Claude Desktop
- **🎓 Educational Tool**: Demonstrate RAG and vector search technologies

## 🤝 Contributing

Contributions are welcome! This project is open source and MIT licensed.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📚 Learn More

- **[Model Context Protocol](https://modelcontextprotocol.io/)** - Official MCP documentation
- **[mcp-handler](https://www.npmjs.com/package/mcp-handler)** - The HTTP-based MCP handler used in this project
- **[mcp-remote](https://www.npmjs.com/package/mcp-remote)** - Bridge tool for Claude Desktop connectivity
- **[Upstash Vector](https://upstash.com/docs/vector)** - Serverless vector database documentation
- **[Claude Desktop](https://claude.ai/download)** - Download and setup guide
- **[Next.js Documentation](https://nextjs.org/docs)** - Learn about the framework

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created by **Binal** as a digital twin RAG search server

⭐ If you find this project useful, please consider giving it a star on GitHub!

---

*Built with ❤️ using Next.js, shadcn/ui, Upstash Vector, and the Model Context Protocol*
