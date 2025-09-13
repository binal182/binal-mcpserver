"use client"

import { useState, useEffect } from "react"
import { Search, RefreshCw, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { searchBinalKnowledge as searchAction, listTools, checkConnection } from "@/app/actions/mcp-actions"

export function TestRagSearch() {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [serverStatus, setServerStatus] = useState<'checking' | 'online' | 'offline'>('checking')
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'connected' | 'disconnected'>('checking')

  // Check server status on component mount
  useEffect(() => {
    checkServerStatus()
    checkVectorConnection()
  }, [])

  const checkServerStatus = async () => {
    setServerStatus('checking')
    try {
      // Use server action to check if MCP tools are available
      const result = await listTools()
      if (result.success) {
        setServerStatus('online')
      } else {
        setServerStatus('offline')
      }
    } catch {
      setServerStatus('offline')
    }
  }

  const checkVectorConnection = async () => {
    setConnectionStatus('checking')
    try {
      const result = await checkConnection()
      if (result.success && result.result?.connected) {
        setConnectionStatus('connected')
      } else {
        setConnectionStatus('disconnected')
        if (result.result?.error) {
          setError(`Vector DB: ${result.result.error}`)
        }
      }
    } catch {
      setConnectionStatus('disconnected')
    }
  }

  const searchKnowledge = async () => {
    if (!query.trim()) return

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      // Use server action to call MCP RAG search logic
      const result = await searchAction(query.trim())
      
      if (result.success && result.result) {
        setResult(result.result.content[0].text)
      } else if (result.error) {
        setError(result.error.message || 'An error occurred')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to connect to server')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading && query.trim()) {
      searchKnowledge()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Binal Knowledge Search</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm">
              {serverStatus === 'checking' && (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  <span className="text-muted-foreground">Checking...</span>
                </>
              )}
              {serverStatus === 'online' && (
                <>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-green-600 dark:text-green-400">Server Online</span>
                </>
              )}
              {serverStatus === 'offline' && (
                <>
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="text-red-600 dark:text-red-400">Server Offline</span>
                </>
              )}
            </div>
            <div className="flex items-center space-x-1 text-sm">
              {connectionStatus === 'checking' && (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  <span className="text-muted-foreground">Vector DB...</span>
                </>
              )}
              {connectionStatus === 'connected' && (
                <>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-green-600 dark:text-green-400">Vector DB Connected</span>
                </>
              )}
              {connectionStatus === 'disconnected' && (
                <>
                  <XCircle className="h-4 w-4 text-red-500" />
                  <span className="text-red-600 dark:text-red-400">Vector DB Disconnected</span>
                </>
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                checkServerStatus()
                checkVectorConnection()
              }}
              disabled={serverStatus === 'checking' || connectionStatus === 'checking'}
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </CardTitle>
        <CardDescription>
          Test the RAG search functionality using server actions that call the same logic as the MCP handler at /api/[transport].
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {(serverStatus === 'offline' || connectionStatus === 'disconnected') && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Connection Issues</h4>
            {serverStatus === 'offline' && (
              <p className="text-sm text-red-600 dark:text-red-400 mb-2">
                • Server not running: Make sure you have started the development server with <code className="bg-red-500/10 px-1 rounded">pnpm run dev</code>
              </p>
            )}
            {connectionStatus === 'disconnected' && (
              <p className="text-sm text-red-600 dark:text-red-400">
                • Vector Database disconnected: Check your Upstash Vector credentials in .env.local
              </p>
            )}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label htmlFor="query" className="block text-sm font-medium mb-2">
              Ask a question about Binal:
            </label>
            <div className="flex space-x-2">
              <Input
                id="query"
                type="text"
                placeholder="e.g., What is Binal's experience with Python?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
                maxLength={500}
              />
              <Button
                onClick={searchKnowledge}
                disabled={loading || !query.trim() || serverStatus !== 'online' || connectionStatus !== 'connected'}
                size="lg"
              >
                {loading ? (
                  <>
                    <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </>
                )}
              </Button>
            </div>
          </div>

          {result && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Search Results:</h4>
              <div className="prose prose-sm max-w-none text-green-600 dark:text-green-400 whitespace-pre-wrap">
                {result}
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <h4 className="font-semibold text-red-600 dark:text-red-400 mb-2">Error:</h4>
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}
        </div>

        <Separator />

        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Example Questions:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              "What programming languages does Binal know?",
              "Tell me about Binal's education",
              "What projects has Binal worked on?",
              "What is Binal's experience with AI/ML?"
            ].map((exampleQuery) => (
              <Button
                key={exampleQuery}
                variant="outline"
                size="sm"
                onClick={() => {
                  setQuery(exampleQuery)
                  setTimeout(() => searchKnowledge(), 100)
                }}
                disabled={loading || serverStatus !== 'online' || connectionStatus !== 'connected'}
                className="justify-start text-left h-auto py-2 px-3 whitespace-normal"
              >
                {exampleQuery}
              </Button>
            ))}
          </div>
        </div>

        <div className="text-xs text-muted-foreground">
          <p>This interface uses server actions that call the same RAG search logic as the MCP server.</p>
          <p>The MCP server endpoint is at /api/[transport] for Claude Desktop connections.</p>
        </div>
      </CardContent>
    </Card>
  )
}