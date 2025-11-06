"use client"

import { Search, Settings, Play, User, FileText, Wrench } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SetupGuide } from "@/components/setup-guide"
import { TestRagSearch } from "@/components/test-rag-search"
import { McpProtocolInfo } from "@/components/mcp-protocol-info"
import { UsageGuide } from "@/components/usage-guide"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { InteractiveResume } from "@/components/interactive-resume"
import { McpSetupGuide } from "@/components/mcp-setup-guide"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <HeroSection />

        {/* Main Content Tabs */}
        <Tabs defaultValue="resume" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="resume" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Resume</span>
            </TabsTrigger>
            <TabsTrigger value="setup" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Setup</span>
            </TabsTrigger>
            <TabsTrigger value="mcp" className="flex items-center space-x-2">
              <Wrench className="h-4 w-4" />
              <span>MCP Guide</span>
            </TabsTrigger>
            <TabsTrigger value="test" className="flex items-center space-x-2">
              <Search className="h-4 w-4" />
              <span>Test Search</span>
            </TabsTrigger>
            <TabsTrigger value="usage" className="flex items-center space-x-2">
              <Play className="h-4 w-4" />
              <span>How to Use</span>
            </TabsTrigger>
            <TabsTrigger value="about" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>About</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="resume" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Interactive Resume</h2>
                <p className="text-muted-foreground">Ask questions about Binal's professional background</p>
              </div>
              <Link href="/resume" target="_blank">
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  View Full Resume
                </Button>
              </Link>
            </div>
            <InteractiveResume />
          </TabsContent>

          <TabsContent value="setup" className="space-y-6">
            <SetupGuide />
          </TabsContent>

          <TabsContent value="mcp" className="space-y-6">
            <McpSetupGuide />
          </TabsContent>

          <TabsContent value="test" className="space-y-6">
            <McpProtocolInfo />
            <TestRagSearch />
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <UsageGuide />
          </TabsContent>

          <TabsContent value="about" className="space-y-6">
            <AboutSection />
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
