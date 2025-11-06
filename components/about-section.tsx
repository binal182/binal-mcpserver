"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Award, 
  Target, 
  TrendingUp, 
  Users, 
  Code, 
  Database,
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Star,
  ArrowRight,
  Building,
  Clock,
  Lightbulb,
  Zap,
  Shield,
  Rocket,
  Eye,
  Heart
} from "lucide-react"
import { personalInfo, workExperience, education, achievements } from "@/lib/resume-data"

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const workExperienceData = workExperience

  const coreValues = [
    {
      icon: Eye,
      title: "Vision",
      description: "Transforming complex data into actionable insights that drive business growth and innovation."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Committed to excellence in data analytics and fostering collaborative team environments."
    },
    {
      icon: Target,
      title: "Purpose",
      description: "Bridging the gap between cutting-edge technology and practical business solutions."
    }
  ]

  const keyStrengths = [
    { icon: Lightbulb, title: "Innovation", description: "Pioneering AI solutions" },
    { icon: Users, title: "Leadership", description: "Team management & mentoring" },
    { icon: Zap, title: "Execution", description: "Rapid prototyping & delivery" },
    { icon: Shield, title: "Reliability", description: "Consistent quality delivery" }
  ]

  const educationCertifications = [
    {
      title: education.degree,
      institution: education.institution,
      year: education.graduationDate,
      type: "degree"
    }
  ]

  return (
    <section id="about-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Binal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate AI Data Engineer with a proven track record of transforming complex challenges 
            into innovative solutions that drive measurable business impact.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center mb-12 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {[
              { id: "overview", label: "Overview" },
              { id: "experience", label: "Experience" },
              { id: "values", label: "Values" },
              { id: "education", label: "Education" }
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`transition-all duration-300 ${
                  activeTab === tab.id 
                    ? "bg-black text-white shadow-lg" 
                    : "text-gray-600 hover:text-black"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className={`transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Professional Summary */}
              <Card className="p-8 interactive-card border-2 hover:border-black">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Briefcase className="w-6 h-6 text-black" />
                  Professional Summary
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    {personalInfo.summary}
                  </p>
                  <p>
                    My expertise spans from data engineering and AI development to team leadership and process optimization, 
                    with hands-on experience in Python, SQL, and modern web technologies.
                  </p>
                  <p>
                    I'm particularly passionate about RAG (Retrieval-Augmented Generation) systems, 
                    vector databases, and creating seamless user experiences through innovative AI interfaces.
                  </p>
                </div>

                {/* Key Statistics */}
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">10+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">5</div>
                    <div className="text-sm text-gray-600">Team Members Led</div>
                  </div>
                </div>
              </Card>

              {/* Core Strengths */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Core Strengths</h3>
                {keyStrengths.map((strength, index) => (
                  <Card key={index} className="p-6 interactive-card border-2 hover:border-black">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                        <strength.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{strength.title}</h4>
                        <p className="text-gray-600">{strength.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div className="space-y-8">
              {workExperienceData.map((job, index) => (
                <Card key={index} className="p-8 interactive-card border-2 hover:border-black">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Job Header */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-5 h-5 text-black" />
                        <h3 className="text-xl font-bold">{job.company}</h3>
                      </div>
                      <p className="text-lg font-semibold text-gray-800 mb-2">{job.title}</p>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{job.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{job.location}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-black" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div>
                        <h5 className="font-semibold mb-3">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Values Tab */}
          {activeTab === "values" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <Card key={index} className="p-8 text-center interactive-card border-2 hover:border-black">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationCertifications.map((item, index) => (
                <Card key={index} className="p-6 interactive-card border-2 hover:border-black">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant={item.type === 'degree' ? 'default' : 'outline'} className="text-xs">
                      {item.type === 'degree' ? 'Degree' : 'Certification'}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{item.institution}</p>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs">{item.year}</span>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Card className="p-8 bg-black text-white inline-block max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how my expertise in data analytics and team leadership can contribute to your organization's success.
            </p>
            <a href="mailto:sbinal182@gmail.com?subject=Collaboration Opportunity&body=Hi Binal,%0D%0A%0D%0AI'd like to discuss how your expertise in data analytics and team leadership can contribute to our organization.%0D%0A%0D%0AYou can also reach me at 0403 892 199.%0D%0A%0D%0ABest regards">
              <Button variant="secondary" size="lg" className="bg-white text-black hover:bg-gray-100">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  )
}