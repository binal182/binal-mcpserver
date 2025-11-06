"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { 
  Settings, 
  Download, 
  Play, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Terminal, 
  FileText,
  Database,
  Loader2
} from "lucide-react"
import { testDatabaseConnection } from "@/app/actions/database-actions"

export function McpSetupGuide() {
  const [testLoading, setTestLoading] = useState(false)
  const [testResult, setTestResult] = useState<any>(null)

  const handleTestConnection = async () => {
    setTestLoading(true)
    try {
      const result = await testDatabaseConnection()
      setTestResult(result)
    } catch (error) {
      setTestResult({ success: false, error: 'Failed to test connection' })
    } finally {
      setTestLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            MCP Setup & Troubleshooting Guide
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Complete guide to set up the Model Context Protocol server and troubleshoot common issues.
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="setup" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="setup">Setup Guide</TabsTrigger>
              <TabsTrigger value="database">Database Setup</TabsTrigger>
              <TabsTrigger value="claude">Claude Integration</TabsTrigger>
              <TabsTrigger value="troubleshoot">Troubleshooting</TabsTrigger>
            </TabsList>

            <TabsContent value="setup" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Step 1: Environment Setup</h3>
                <p className="text-sm text-muted-foreground">
                  First, ensure you have your Upstash Vector database credentials set up.
                </p>
                
                <CodeBlock
                  language="bash"
                  title=".env.local"
                >
{`# Upstash Vector Database Configuration
UPSTASH_VECTOR_REST_URL=https://your-database-url.upstash.io
UPSTASH_VECTOR_REST_TOKEN=your_database_token_here`}
                </CodeBlock>

                <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-blue-900">Environment Variables</p>
                    <p className="text-blue-700">
                      Your credentials are already configured. You can find them in your .env.local file.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Step 2: Start the Development Server</h3>
                <CodeBlock
                  language="bash"
                  title="Terminal"
                >
{`# Install dependencies (if not already done)
pnpm install

# Start the development server
pnpm dev

# The server will be available at:
# http://localhost:3000`}
                </CodeBlock>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Step 3: Verify MCP Endpoint</h3>
                <p className="text-sm text-muted-foreground">
                  The MCP server endpoint is automatically available at <code className="bg-gray-100 px-1 rounded">http://localhost:3000/api/mcp</code>
                </p>
                
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    MCP Endpoint Active
                  </Badge>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="database" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Database Setup & Testing</h3>
                <p className="text-sm text-muted-foreground">
                  Populate your vector database with resume data and test the connection.
                </p>

                <div className="grid gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <Play className="h-4 w-4" />
                        Test Connection
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Test your database connection and search functionality.
                      </p>
                      <Button variant="outline" onClick={handleTestConnection} disabled={testLoading}>
                        {testLoading && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                        Test Connection
                      </Button>
                      
                      {testResult && (
                        <div className={`mt-4 p-3 rounded-lg ${testResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                          <div className="flex items-center gap-2">
                            {testResult.success ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-600" />
                            )}
                            <span className={`text-sm font-medium ${testResult.success ? 'text-green-900' : 'text-red-900'}`}>
                              {testResult.success ? 'Connection Successful!' : 'Connection Failed'}
                            </span>
                          </div>
                          {testResult.success && testResult.results && (
                            <p className="text-sm mt-1 text-green-700">
                              Found {testResult.results.length} results in the database.
                            </p>
                          )}
                          {testResult.error && (
                            <p className="text-sm mt-1 text-red-700">{testResult.error}</p>
                          )}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="claude" className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Claude Desktop Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Configure Claude Desktop to use your MCP server for enhanced AI assistance.
                </p>

                <div className="space-y-4">
                  <h4 className="font-medium">Step 1: Install Claude Desktop</h4>
                  <p className="text-sm text-muted-foreground">
                    Download and install Claude Desktop from the official Anthropic website.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Download Claude Desktop
                    </a>
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Step 2: Configure MCP Settings</h4>
                  <p className="text-sm text-muted-foreground">
                    Add the following configuration to Claude Desktop's MCP settings:
                  </p>
                  
                  <CodeBlock
                    language="json"
                    title="Claude Desktop MCP Configuration"
                  >
{`{
  "mcpServers": {
    "binal-mcp": {
      "command": "node",
      "args": ["-e", "require('http').createServer((req, res) => { res.writeHead(200, {'Content-Type': 'application/json'}); res.end('{}'); }).listen(3000);"],
      "env": {
        "UPSTASH_VECTOR_REST_URL": "your_upstash_url",
        "UPSTASH_VECTOR_REST_TOKEN": "your_upstash_token"
      }
    }
  }
}`}
                  </CodeBlock>

                  <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-yellow-900">Configuration Note</p>
                      <p className="text-yellow-700">
                        Make sure your development server is running on port 3000 before using Claude Desktop.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Step 3: Test Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Once configured, you can ask Claude questions like:
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                    <li>"What are Binal's technical skills?"</li>
                    <li>"Tell me about Binal's work experience"</li>
                    <li>"What projects has Binal worked on?"</li>
                    <li>"What is Binal's educational background?"</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="troubleshoot" className="space-y-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Common Issues & Solutions</h3>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base text-red-600">Database Connection Errors</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm"><strong>Issue:</strong> "Missing Upstash Vector configuration" error</p>
                    <p className="text-sm"><strong>Solution:</strong></p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                      <li>Check that .env.local file exists and contains your Upstash credentials</li>
                      <li>Verify the UPSTASH_VECTOR_REST_URL and UPSTASH_VECTOR_REST_TOKEN are correct</li>
                      <li>Restart your development server after changing environment variables</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base text-red-600">No Search Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm"><strong>Issue:</strong> Search queries return "No relevant information found"</p>
                    <p className="text-sm"><strong>Solution:</strong></p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                      <li>Use the "Populate Database" button to add resume data</li>
                      <li>Try more specific search terms</li>
                      <li>Check if the database connection is working with "Test Connection"</li>
                      <li>Verify your Upstash Vector database is active and has data</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base text-red-600">MCP Server Not Responding</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm"><strong>Issue:</strong> Claude Desktop cannot connect to MCP server</p>
                    <p className="text-sm"><strong>Solution:</strong></p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                      <li>Ensure your Next.js development server is running on port 3000</li>
                      <li>Check that http://localhost:3000/api/mcp endpoint is accessible</li>
                      <li>Verify Claude Desktop MCP configuration is correct</li>
                      <li>Restart both the development server and Claude Desktop</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base text-red-600">Port Already in Use</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm"><strong>Issue:</strong> "Port 3000 is already in use" error</p>
                    <p className="text-sm"><strong>Solution:</strong></p>
                    <CodeBlock
                      language="bash"
                    >
{`# Kill any process using port 3000
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Or use a different port
pnpm dev -- -p 3001`}
                    </CodeBlock>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base text-blue-600">Getting Help</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm">If you're still experiencing issues:</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                      <li>Check the browser console for JavaScript errors</li>
                      <li>Review the terminal output for server errors</li>
                      <li>Verify your Upstash Vector database is active and properly configured</li>
                      <li>Test the resume search functionality in the "Resume" tab first</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}