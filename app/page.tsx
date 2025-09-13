"use client"

import { Search, Settings, Play, User } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SetupGuide } from "@/components/setup-guide"
import { TestRagSearch } from "@/components/test-rag-search"
import { McpProtocolInfo } from "@/components/mcp-protocol-info"
import { UsageGuide } from "@/components/usage-guide"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <HeroSection />

        {/* Main Content Tabs */}
        <Tabs defaultValue="setup" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="setup" className="flex items-center space-x-2">
              <Settings className="h-4 w-4" />
              <span>Setup Guide</span>
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

          <TabsContent value="setup" className="space-y-6">
            <SetupGuide />
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
