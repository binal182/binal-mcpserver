"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Download, 
  Mail, 
  MapPin, 
  Phone, 
  Linkedin, 
  Github, 
  Briefcase,
  Award,
  TrendingUp,
  Users,
  Code,
  Database,
  Brain,
  Rocket,
  Star,
  ArrowRight,
  MessageCircle,
  FileText,
  Target,
  ChevronDown
} from "lucide-react"
import Link from "next/link"
import { personalInfo, skillsMetrics } from "@/lib/resume-data"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const achievements = [
    { icon: TrendingUp, label: "40% Training Efficiency", value: "Improvement", color: "text-black" },
    { icon: Users, label: "200+ Event", value: "Coordination", color: "text-black" },
    { icon: Code, label: "AI-Powered", value: "Digital Twin", color: "text-black" },
    { icon: Database, label: "RAG System", value: "Architecture", color: "text-black" }
  ]

  const skills = skillsMetrics.technical.slice(0, 5)

  const handleScrollToInteractive = () => {
    // Find the interactive chat section by ID and scroll to it
    const interactiveSection = document.getElementById('interactive-chat')
    
    if (interactiveSection) {
      interactiveSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else {
      // Fallback: scroll to approximate position
      const heroHeight = window.innerHeight
      const scrollPosition = heroHeight * 3.5
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white py-32 min-h-screen flex items-center mb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_black_1px,_transparent_1px)] bg-[length:24px_24px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-gray-200 rounded-full animate-float opacity-50"></div>
      <div className="absolute top-40 right-20 w-32 h-32 border border-gray-300 rounded-lg animate-float opacity-30" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-black rounded-full animate-float opacity-20" style={{animationDelay: '1s'}}></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Status Badge */}
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-600">Available for New Opportunities</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <div className="space-y-3">
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
                  {personalInfo.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                  {personalInfo.summary}
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-4 text-center interactive-card border-2 hover:border-black transition-all duration-300">
                  <achievement.icon className={`w-6 h-6 mx-auto mb-2 ${achievement.color}`} />
                  <div className="metric-highlight">{achievement.value}</div>
                  <div className="text-xs text-gray-600">{achievement.label}</div>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/resume" target="_blank">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 transition-all duration-300 hover:scale-105">
                  <FileText className="w-4 h-4 mr-2" />
                  View Full Resume
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-black text-black hover:bg-black hover:text-white px-8 transition-all duration-300"
                onClick={handleScrollToInteractive}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Ask Questions
              </Button>
              
              <a href="/resume" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center gap-2 hover:text-black transition-colors">
                <Mail className="w-4 h-4" />
                <span>{personalInfo.contact.email}</span>
              </a>
              <a href={`tel:${personalInfo.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-black transition-colors">
                <Phone className="w-4 h-4" />
                <span>{personalInfo.contact.phone}</span>
              </a>
              <div className="flex items-center gap-2 hover:text-black transition-colors cursor-pointer">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="hover:bg-black hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-black hover:text-white transition-all duration-300">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - Skills & Visual Elements */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {/* Professional Summary Card */}
            <Card className="p-8 interactive-card border-2 hover:border-black transition-all duration-300 bg-white/90 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Professional Highlights</h3>
              </div>
              
              <div className="space-y-6">
                {/* Key Skills with Progress */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-800">Core Competencies</h4>
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <span className="font-medium text-sm">{skill.name}</span>
                          <div className="text-xs text-gray-600 mt-1">{skill.source}</div>
                        </div>
                        <Badge variant="outline" className="border-black text-black text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Achievement */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border-l-4 border-black">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-black" />
                    <span className="font-semibold">Latest Achievement</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Developed industry-first AI-powered Digital Twin platform at AusBiz Consulting, 
                    revolutionizing recruiter-candidate interactions through advanced RAG technology.
                  </p>
                </div>
              </div>
            </Card>

            {/* Interactive Elements */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center interactive-card border-2 hover:border-black animate-float transition-all duration-300">
                <Rocket className="w-8 h-8 mx-auto mb-3 text-black" />
                <div className="text-2xl font-bold text-black">3+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </Card>
              
              <Card className="p-6 text-center interactive-card border-2 hover:border-black animate-float transition-all duration-300" style={{animationDelay: '1s'}}>
                <Star className="w-8 h-8 mx-auto mb-3 text-black" />
                <div className="text-2xl font-bold text-black">95%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </Card>
            </div>


          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  )
}