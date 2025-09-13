import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function AboutSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Binal Digital Twin MCP Server</CardTitle>
        <CardDescription>
          Learn more about this RAG-powered digital twin and the Model Context Protocol implementation.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold mb-2">What is this Digital Twin?</h4>
          <p className="text-sm text-muted-foreground">
            Binal&apos;s Digital Twin is an AI-powered knowledge base that uses Retrieval-Augmented Generation (RAG) 
            to provide intelligent responses about Binal&apos;s professional background, skills, and experience. 
            It leverages vector databases and semantic search to deliver relevant, accurate information.
          </p>
        </div>
        
        <Separator />
        
        <div>
          <h4 className="font-semibold mb-2">Key Features</h4>
          <ul className="text-sm space-y-1">
            <li>• RAG-powered search through Binal&apos;s professional knowledge base</li>
            <li>• Semantic vector search using Upstash Vector database</li>
            <li>• Natural language interface via Claude Desktop</li>
            <li>• Built with TypeScript, Next.js, and Model Context Protocol</li>
            <li>• Real-time relevance scoring and result ranking</li>
            <li>• Secure and scalable cloud deployment</li>
            <li>• Easy integration with AI assistants</li>
          </ul>
        </div>
        
        <Separator />
        
        <div>
          <h4 className="font-semibold mb-2">Technology Stack</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>Protocol:</strong> Model Context Protocol</p>
              <p><strong>Database:</strong> Upstash Vector</p>
              <p><strong>Framework:</strong> Next.js 15</p>
              <p><strong>Search:</strong> RAG with Vector Embeddings</p>
            </div>
            <div>
              <p><strong>Language:</strong> TypeScript</p>
              <p><strong>Validation:</strong> Zod schemas</p>
              <p><strong>UI:</strong> shadcn/ui components</p>
              <p><strong>Deployment:</strong> Vercel Platform</p>
            </div>
          </div>
        </div>
        
        <Separator />
        
        <div>
          <h4 className="font-semibold mb-2">Based on Open Source Pattern</h4>
          <p className="text-sm text-muted-foreground">
            This MCP server follows the same architectural pattern as the{" "}
            <a 
              href="https://github.com/gocallum/rolldice-mcpserver" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline font-medium"
            >
              Roll Dice MCP Server
            </a>
            , providing a proven foundation for building reliable MCP tools.
          </p>
        </div>
        
        <Separator />
        
        <div className="flex space-x-4">
          <Button variant="outline" asChild>
            <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer">
              Learn about MCP
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/binal182/binal_digital-twin_py" target="_blank" rel="noopener noreferrer">
              View Python Version
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://upstash.com/docs/vector" target="_blank" rel="noopener noreferrer">
              Upstash Vector Docs
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}