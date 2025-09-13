"use client"

import { useState, useEffect } from "react"
import { Settings } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { resolveApiDomain, getMcpEndpointUrl, isLocalDevelopment } from "@/lib/url-resolver"

export function ClaudeDesktopConfig() {
  const [apiDomain, setApiDomain] = useState<string>('')
  const [mcpEndpoint, setMcpEndpoint] = useState<string>('')
  const [isLocal, setIsLocal] = useState<boolean>(true)

  useEffect(() => {
    // Resolve URLs on client side
    const domain = resolveApiDomain()
    const endpoint = getMcpEndpointUrl()
    const local = isLocalDevelopment()
    
    setApiDomain(domain)
    setMcpEndpoint(endpoint)
    setIsLocal(local)
  }, [])

  const localConfig = `{
  "mcpServers": {
    "binal-digital-twin": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "http://localhost:3000/api/mcp"
      ]
    }
  }
}`

  const cloudConfig = `{
  "mcpServers": {
    "binal-digital-twin": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "${mcpEndpoint || 'https://binalmcp.vercel.app/api/mcp'}"
      ]
    }
  }
}`

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Settings className="h-5 w-5" />
          <span>Step 3: Configure Claude Desktop</span>
        </CardTitle>
        <CardDescription>
          Add the MCP server configuration to Claude Desktop based on your deployment type.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Configuration File Location:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium mb-2">Windows:</p>
                <CodeBlock language="text">%APPDATA%\Claude\claude_desktop_config.json</CodeBlock>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">macOS:</p>
                <CodeBlock language="text">~/Library/Application Support/Claude/claude_desktop_config.json</CodeBlock>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">Configuration Content:</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Choose the configuration that matches your deployment:
            </p>
            
            <Tabs defaultValue={isLocal ? "local" : "cloud"} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="local">Local Development</TabsTrigger>
                <TabsTrigger value="cloud">Cloud Deployment</TabsTrigger>
              </TabsList>
              
              <TabsContent value="local" className="space-y-4">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3 mb-4">
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    <strong>🏠 Local Development:</strong> Use this configuration when running the server locally with <code className="bg-muted px-1 rounded">pnpm run dev</code>
                  </p>
                </div>
                <CodeBlock language="json" title="claude_desktop_config.json (Local)">
                  {localConfig}
                </CodeBlock>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Requirements:</strong></p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Server must be running on <code className="bg-muted px-1 rounded">http://localhost:3000</code></li>
                    <li>Keep the development server running while using Claude Desktop</li>
                    <li>Ensure your Upstash Vector credentials are configured</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="cloud" className="space-y-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
                  <p className="text-sm text-green-600 dark:text-green-400">
                    <strong>☁️ Cloud Deployment:</strong> Use this configuration when the server is deployed to Vercel or another cloud platform
                  </p>
                </div>
                <CodeBlock language="json" title="claude_desktop_config.json (Cloud)">
                  {cloudConfig}
                </CodeBlock>
                <div className="text-sm text-muted-foreground">
                  <p><strong>Current deployment URL:</strong> <code className="bg-muted px-1 rounded">{apiDomain || 'Not detected'}</code></p>
                  <p className="mt-2"><strong>Benefits:</strong></p>
                  <ul className="list-disc list-inside space-y-1 mt-1">
                    <li>Always available - no need to run local server</li>
                    <li>Automatically uses your custom domain if configured</li>
                    <li>Works from any computer with Claude Desktop</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">Important Notes:</h4>
            <ul className="text-sm space-y-1 text-amber-600 dark:text-amber-400">
              <li>• If the config file doesn&apos;t exist, create it</li>
              <li>• Make sure the server is accessible before using Claude Desktop</li>
              <li>• You may need to enable Developer mode in Claude Desktop settings</li>
              <li>• For cloud deployments, ensure your deployment is live and accessible</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}