export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <p>Built with Next.js, shadcn/ui, Upstash Vector, and the Model Context Protocol</p>
        <p className="mt-1">
          Binal Digital Twin MCP Server • Powered by RAG Technology
          {" "}• Learn more about{" "}
          <a 
            href="https://upstash.com/docs/vector" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:underline"
          >
            Upstash Vector
          </a>
          {" "}and{" "}
          <a 
            href="https://modelcontextprotocol.io/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:underline"
          >
            Model Context Protocol
          </a>
        </p>
      </div>
    </footer>
  )
}