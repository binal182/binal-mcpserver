import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, MessageCircle, Database, Brain, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="text-center py-12 mb-8">
      <div className="space-y-6">
        {/* Main Heading */}
        <div className="space-y-4">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Brain className="h-8 w-8 text-blue-600" />
            <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border-0">
              AI-Powered Resume
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Binal Shah
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            AI Data Engineer & Digital Innovation Specialist
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my professional background as an AI Data Engineer with expertise in spec-driven development, 
            agentic systems, and production RAG pipelines. Ask questions about my experience with Next.js 15, 
            vector databases, and AI agent development.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/resume" target="_blank">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <FileText className="h-5 w-5 mr-2" />
              View Full Resume
            </Button>
          </Link>
          
          <Button variant="outline" size="lg" onClick={() => {
            const resumeTab = document.querySelector('[value="resume"]') as HTMLElement
            resumeTab?.click()
          }}>
            <MessageCircle className="h-5 w-5 mr-2" />
            Ask Questions
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6 text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Interactive Chat</h3>
              <p className="text-sm text-muted-foreground">
                Ask specific questions about my background and get detailed, contextual answers
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-indigo-50 to-indigo-100">
            <CardContent className="p-6 text-center">
              <div className="bg-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">RAG-Powered</h3>
              <p className="text-sm text-muted-foreground">
                Powered by Upstash Vector database with semantic search capabilities
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6 text-center">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">MCP Integration</h3>
              <p className="text-sm text-muted-foreground">
                Built as a Model Context Protocol server for AI assistant integration
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">AI-Powered</div>
            <div className="text-sm text-muted-foreground">Resume Search</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-600">Real-time</div>
            <div className="text-sm text-muted-foreground">Responses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">MCP</div>
            <div className="text-sm text-muted-foreground">Compatible</div>
          </div>
        </div>
      </div>
    </section>
  )
}