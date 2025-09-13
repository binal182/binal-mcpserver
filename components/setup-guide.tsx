import { Download, Settings, Play, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClaudeDesktopConfig } from "@/components/claude-desktop-config"

export function SetupGuide() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Download className="h-5 w-5" />
            <span>Step 1: Install Claude Desktop</span>
          </CardTitle>
          <CardDescription>
            Download and install Claude Desktop to connect with the Binal Digital Twin MCP server.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm">
              Claude Desktop is required to use MCP servers. Download the appropriate version for your operating system:
            </p>
            <div className="flex space-x-2">
              <Button asChild>
                <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-2" />
                  Download for Windows
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-2" />
                  Download for macOS
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-5 w-5" />
            <span>Step 2: Choose Your Setup Method</span>
          </CardTitle>
          <CardDescription>
            You can use this MCP server in two ways: running locally or using the cloud deployment.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <span>🖥️</span>
                  <span>Local Development</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Run the server on your local machine for development and testing.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Steps:</p>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Clone this repository to your computer</li>
                    <li>Set up your Upstash Vector database credentials</li>
                    <li>Run <code className="bg-muted px-1 rounded text-xs">pnpm install</code></li>
                    <li>Run <code className="bg-muted px-1 rounded text-xs">pnpm run dev</code></li>
                    <li>Server will be available at localhost:3000</li>
                  </ol>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    <strong>Best for:</strong> Development, customization, and when you want full control
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <span>☁️</span>
                  <span>Cloud Deployment</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Use the already deployed version without running anything locally.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Steps:</p>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>No local setup required!</li>
                    <li>Use the configuration provided in Step 3</li>
                    <li>The server is already running in the cloud</li>
                  </ol>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-xs text-green-600 dark:text-green-400">
                    <strong>Best for:</strong> Quick setup and immediate use
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <ClaudeDesktopConfig />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Play className="h-5 w-5" />
            <span>Step 4: Restart Claude Desktop</span>
          </CardTitle>
          <CardDescription>
            Restart Claude Desktop to load the new MCP server configuration.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Completely close Claude Desktop</li>
            <li>Reopen Claude Desktop</li>
            <li>Look for a hammer icon (🔨) in the bottom right of the input box</li>
            <li>The hammer icon indicates MCP tools are available</li>
          </ol>
          <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-sm text-green-600 dark:text-green-400">
              ✅ If you see the hammer icon, you&apos;re ready to start asking questions about Binal!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}