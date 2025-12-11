"use client"

import { useState, useEffect } from "react"
import { Search, Settings, Play, User, FileText, Wrench, MessageCircle, Award, Briefcase } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SetupGuide } from "@/components/setup-guide"
import { TestRagSearch } from "@/components/test-rag-search"
import { McpProtocolInfo } from "@/components/mcp-protocol-info"
import { UsageGuide } from "@/components/usage-guide"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { McpSetupGuide } from "@/components/mcp-setup-guide"
import { SkillsShowcase } from "@/components/skills-showcase"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  const [showTechnicalTabs, setShowTechnicalTabs] = useState(false)

  // Listen for custom event to show technical tabs
  useEffect(() => {
    const handleShowTechnicalTabs = () => {
      setShowTechnicalTabs(true)
    }
    
    window.addEventListener('showTechnicalTabs', handleShowTechnicalTabs)
    
    return () => {
      window.removeEventListener('showTechnicalTabs', handleShowTechnicalTabs)
    }
  }, [])

  const technicalFeatures = [
    {
      icon: Search,
      title: "Smart Resume Search",
      description: "Test the RAG-powered search functionality that powers the interactive resume experience.",
      badge: "Live Demo"
    },
    {
      icon: Settings,
      title: "MCP Integration",
      description: "Learn how to integrate this resume system with Claude Desktop through Model Context Protocol.",
      badge: "Technical"
    },
    {
      icon: MessageCircle,
      title: "Technical Architecture",
      description: "Deep dive into the implementation details, technology stack, and innovative features.",
      badge: "Documentation"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="mb-20">
          <HeroSection />
        </div>

        {/* About Section */}
        <div className="mb-20">
          <AboutSection />
        </div>

        {/* Skills Showcase */}
        <div className="mb-20">
          <SkillsShowcase />
        </div>

        {/* Interactive Chat Section - Always Visible */}
        <section id="interactive-chat" className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Interactive AI Resume Chat</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Ask questions about my professional background and get intelligent, contextual responses powered by advanced AI technology.
              </p>
              <div className="flex justify-center gap-4 mb-8">
                <Badge variant="outline" className="border-blue-500 text-blue-700">
                  <MessageCircle className="h-3 w-3 mr-1" />
                  AI-Powered
                </Badge>
                <Badge variant="outline" className="border-green-500 text-green-700">
                  Live Now
                </Badge>
              </div>
            </div>
            
            {/* Interactive Resume Component */}
            <div className="max-w-5xl mx-auto">
              <TestRagSearch />
            </div>
            
            <div className="text-center mt-8">
              <Link href="/resume" target="_blank">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                  <FileText className="h-4 w-4 mr-2" />
                  View Full Resume
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Features Section */}
        <section className="py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Technical Demonstrations</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the technical architecture and advanced features that power this AI-driven portfolio platform.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {technicalFeatures.map((feature, index) => (
                <Card key={index} className="p-8 text-center interactive-card border-2 hover:border-black">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex justify-center mb-4">
                    <Badge variant="outline" className="border-black text-black">
                      {feature.badge}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>

            {/* Toggle Technical Features */}
            <div className="text-center">
              <Button
                onClick={() => setShowTechnicalTabs(!showTechnicalTabs)}
                variant="outline"
                size="lg"
                className="border-black text-black hover:bg-black hover:text-white"
              >
                {showTechnicalTabs ? "Hide" : "Explore"} Technical Features
                <Wrench className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Technical Tabs (Collapsible) */}
        {showTechnicalTabs && (
          <section className="py-32 bg-white">
            <div className="container mx-auto px-4">
              <Tabs defaultValue="test" className="w-full">
                <TabsList className="grid w-full grid-cols-5 bg-gray-100">
                  <TabsTrigger value="test" className="flex items-center space-x-2 data-[state=active]:bg-black data-[state=active]:text-white">
                    <Search className="h-4 w-4" />
                    <span>Search Demo</span>
                  </TabsTrigger>
                  <TabsTrigger value="setup" className="flex items-center space-x-2 data-[state=active]:bg-black data-[state=active]:text-white">
                    <Settings className="h-4 w-4" />
                    <span>Setup Guide</span>
                  </TabsTrigger>
                  <TabsTrigger value="mcp" className="flex items-center space-x-2 data-[state=active]:bg-black data-[state=active]:text-white">
                    <Wrench className="h-4 w-4" />
                    <span>MCP Guide</span>
                  </TabsTrigger>
                  <TabsTrigger value="usage" className="flex items-center space-x-2 data-[state=active]:bg-black data-[state=active]:text-white">
                    <Play className="h-4 w-4" />
                    <span>How to Use</span>
                  </TabsTrigger>
                  <TabsTrigger value="technical" className="flex items-center space-x-2 data-[state=active]:bg-black data-[state=active]:text-white">
                    <User className="h-4 w-4" />
                    <span>Technical Details</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="test" className="space-y-6 mt-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">RAG Search Demo</h2>
                    <p className="text-gray-600">Test the underlying search technology that powers the interactive resume</p>
                  </div>
                  <McpProtocolInfo />
                  <TestRagSearch />
                </TabsContent>

                <TabsContent value="setup" className="space-y-6 mt-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Setup Instructions</h2>
                    <p className="text-gray-600">Learn how to set up this system in your own environment</p>
                  </div>
                  <SetupGuide />
                </TabsContent>

                <TabsContent value="mcp" className="space-y-6 mt-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Model Context Protocol Integration</h2>
                    <p className="text-gray-600">Integrate this resume system with Claude Desktop and other AI assistants</p>
                  </div>
                  <McpSetupGuide />
                </TabsContent>

                <TabsContent value="usage" className="space-y-6 mt-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Usage Guide</h2>
                    <p className="text-gray-600">Comprehensive guide on how to use all features effectively</p>
                  </div>
                  <UsageGuide />
                </TabsContent>

                <TabsContent value="technical" className="space-y-6 mt-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Technical Implementation</h2>
                    <p className="text-gray-600">Deep dive into the technical architecture and implementation details</p>
                  </div>
                  
                  {/* Technical Details Card */}
                  <Card className="p-8 border-2 hover:border-black">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Award className="w-6 h-6 text-black" />
                      Technical Architecture
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4">Technology Stack</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <strong>Framework:</strong> Next.js 15 with App Router</li>
                          <li>• <strong>Database:</strong> Upstash Vector Database</li>
                          <li>• <strong>Search:</strong> RAG with Vector Embeddings</li>
                          <li>• <strong>Protocol:</strong> Model Context Protocol</li>
                          <li>• <strong>Language:</strong> TypeScript</li>
                          <li>• <strong>UI:</strong> shadcn/ui Components</li>
                          <li>• <strong>Styling:</strong> Tailwind CSS</li>
                          <li>• <strong>Deployment:</strong> Vercel Platform</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4">Key Features</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Real-time RAG-powered search</li>
                          <li>• Conversation memory and context</li>
                          <li>• Semantic vector similarity matching</li>
                          <li>• Professional black & white theme</li>
                          <li>• Interactive animations and effects</li>
                          <li>• Mobile-responsive design</li>
                          <li>• HR-focused presentation</li>
                          <li>• Claude Desktop integration</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}

        {/* Call to Action Section */}
        <section className="py-32 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Connect?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Interested in discussing opportunities, collaborations, or learning more about this innovative AI-powered resume platform?
            </p>
            <div className="flex justify-center items-center">
              <a href="/resume" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
