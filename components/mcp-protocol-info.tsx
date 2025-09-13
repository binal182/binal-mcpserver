import { Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function McpProtocolInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Settings className="h-5 w-5" />
          <span>About MCP Protocol & RAG Search</span>
        </CardTitle>
        <CardDescription>
          Understanding how the Model Context Protocol works with Binal&apos;s digital twin and RAG search capabilities.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-sm mb-2">What is MCP (Model Context Protocol)?</h4>
            <p className="text-sm text-muted-foreground">
              MCP is a protocol that allows AI assistants like Claude to securely connect to external tools and data sources. 
              It defines a standardized way for AI models to discover available tools, understand their capabilities, and execute them safely.
            </p>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold text-sm mb-2">How the RAG Search Works</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• <strong>Transport Layer:</strong> The server at <code className="bg-muted px-1 rounded">/api/[transport]</code> handles different connection types (SSE, stdio, etc.)</p>
              <p>• <strong>Tool Registration:</strong> Tools like <code className="bg-muted px-1 rounded">search_binal_knowledge</code> are registered with schemas defining their inputs</p>
              <p>• <strong>Vector Search:</strong> Queries are processed using Upstash Vector database with semantic search</p>
              <p>• <strong>RAG Pipeline:</strong> Retrieval-Augmented Generation combines search results with context</p>
              <p>• <strong>Type Safety:</strong> Uses Zod schemas for runtime validation of query parameters</p>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold text-sm mb-2">Web Interface Bridge</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                This web interface uses <strong>Next.js Server Actions</strong> that call shared RAG search logic. 
                Both the MCP server and web interface use the exact same <code className="bg-muted px-1 rounded">searchBinalKnowledge()</code> function from <code className="bg-muted px-1 rounded">/lib/rag-search.ts</code>.
              </p>
              <p className="mt-2">
                <strong>Benefits:</strong> Identical validation, search algorithm, output format, and tool definitions - true single source of truth.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
            <p className="text-sm text-blue-600 dark:text-blue-400">
              <strong>💡 Technical Note:</strong> The MCP handler at <code className="bg-muted px-1 rounded">/api/[transport]</code> and server actions both import the same 
              RAG search logic from <code className="bg-muted px-1 rounded">lib/rag-search.ts</code>, ensuring absolute consistency between Claude Desktop and web testing.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}