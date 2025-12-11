"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Database, 
  Brain, 
  Cloud, 
  Users, 
  Target,
  TrendingUp,
  Award,
  Zap,
  Shield,
  Lightbulb,
  Rocket,
  Star,
  CheckCircle
} from "lucide-react"
import { skillsMetrics, achievements as realAchievements } from "@/lib/resume-data"

export function SkillsShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("technical")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('skills-showcase')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = {
    technical: {
      title: "Technical Expertise",
      icon: Code2,
      skills: skillsMetrics.technical
    },
    leadership: {
      title: "Leadership & Management",
      icon: Users,
      skills: skillsMetrics.leadership
    },
    business: {
      title: "Business Impact",
      icon: TrendingUp,
      skills: skillsMetrics.business
    }
  }

  const achievementsData = [
    {
      icon: Award,
      title: "Technical Innovation",
      items: [
        "Created first-of-its-kind interactive resume technology using vector embeddings",
        "Built production-grade RAG system with 95%+ query accuracy",
        "Pioneered multi-AI tool development workflow with 60%+ automation"
      ]
    },
    {
      icon: Target,
      title: "Leadership Impact",
      items: [
        "Trained and mentored 6+ new hires with measurable improvement in retention",
        "Reduced onboarding time by 40% through systematic training approach",
        "Coordinated 13-member volunteer teams across Sydney and Melbourne"
      ]
    },
    {
      icon: Users,
      title: "Project Success",
      items: [
        "Led event planning for 200+ student participants",
        "Achieved 85% engagement success rate in educational programs",
        "Recognized for consistently high customer satisfaction and teamwork"
      ]
    }
  ]

  const certifications = [
    { name: "Bachelor of Information Technology", issuer: "Victoria University, Sydney", year: "2025", verified: true }
  ]

  return (
    <section id="skills-showcase" className="py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How I developed my technical capabilities, leadership experience, and business impact through real-world experience and education.
          </p>
        </div>

        {/* Category Tabs */}
        <div className={`flex justify-center mb-12 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <div className="inline-flex bg-white rounded-lg p-2 shadow-lg border border-gray-200">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-300 ${
                  activeCategory === key 
                    ? "bg-black text-white shadow-md" 
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="font-medium">{category.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Content */}
        <div className={`transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <Card key={index} className="p-6 interactive-card border-2 hover:border-black">
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="border-black text-black text-xs">
                      {skill.category}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {skill.source}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 leading-relaxed">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className={`mb-16 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center mb-12">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievementsData.map((achievement, index) => (
              <Card key={index} className="p-8 text-center interactive-card border-2 hover:border-black">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-4">{achievement.title}</h4>
                <ul className="space-y-2">
                  {achievement.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center mb-12">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 interactive-card border-2 hover:border-black">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  {cert.verified && (
                    <Badge variant="outline" className="border-green-600 text-green-600">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <h4 className="font-bold mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.year}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Card className="p-8 bg-black text-white inline-block max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Drive Innovation?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how my diverse skill set and proven track record can contribute to your organization's technical and business objectives.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => {
                  // First show the technical tabs section
                  window.dispatchEvent(new CustomEvent('showTechnicalTabs'));
                  // Then scroll to the technical section and activate the tab
                  setTimeout(() => {
                    const element = document.querySelector('[value="technical"]') as HTMLElement;
                    if (element) {
                      element.click();
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }, 100);
                }}
                className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition-colors"
              >
                View Portfolio Projects
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}