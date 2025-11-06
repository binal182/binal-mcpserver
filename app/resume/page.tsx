"use client"

import { useState, useEffect } from "react"
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink,
  Award,
  Users,
  Code,
  Brain,
  Zap,
  Target,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Star,
  ChevronRight,
  Calendar,
  Building,
  CheckCircle2,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export default function ResumePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handlePrint = () => {
    window.print()
  }

  const handleEmailClick = () => {
    window.open('mailto:sbinal182@gmail.com', '_blank')
  }

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/binalshah', '_blank')
  }

  const experiences = [
    {
      title: "AI/Data Intern",
      company: "AusBiz Consulting", 
      period: "Jul 2025 - Sep 2025",
      location: "Sydney, Australia",
      type: "Internship",
      description: "Developed an AI-powered Digital Twin platform that transformed static resumes into interactive, intelligent systems for recruiters using spec-driven development methodology with advanced AI tools.",
      achievements: [
        "Delivered a working digital twin prototype that positioned AusBiz Consulting as an innovator in digital HR technology",
        "Successfully integrated multiple cutting-edge AI technologies into a cohesive, production-ready platform", 
        "Implemented dual-vector database architecture with ChromaDB and Upstash for optimized performance",
        "Created first-of-its-kind interactive resume technology using vector embeddings and JSON data chunking",
        "Established automated testing framework with continuous refinement workflows"
      ],
      technologies: ["Next.js 15", "React 19", "Claude Sonnet 4.0", "GitHub Copilot", "ChromaDB", "Upstash", "Vector Embeddings", "Vercel AI SDK", "shadcn/ui", "Tailwind CSS", "MCP Protocol"],
      impact: "High",
      color: "blue"
    },
    {
      title: "Team Leader - Customer Experience & Training",
      company: "Zeus Street Greek",
      period: "Dec 2022 - Present", 
      location: "North Willoughby, NSW",
      type: "Leadership",
      description: "Led training and development initiatives while delivering exceptional customer service in high-volume food service environment, managing digital workflows and operational excellence.",
      achievements: [
        "Trained and mentored 6+ new hires in POS systems, workflows, and compliance procedures",
        "Reduced onboarding time by 40% through systematic curriculum development and performance tracking",
        "Achieved measurable improvement in staff retention through effective training methodologies",
        "Delivered outstanding customer service to 20+ customers per week in high-volume environments",
        "Successfully handled escalations with professionalism while maintaining customer satisfaction and team KPIs"
      ],
      technologies: ["Deputy", "POS systems", "Digital workflow coordination tools", "Microsoft 365"],
      impact: "High",
      color: "green"
    },
    {
      title: "Local Coordinator",
      company: "Students for Liberty Australia",
      period: "Jan 2023 - May 2024",
      location: "Sydney, Australia", 
      type: "Coordination",
      description: "Led large-scale event planning and coordination for educational workshops, managing hybrid technology delivery and volunteer team coordination across Australia.",
      achievements: [
        "Orchestrated workshop logistics for 200+ student participants across multiple universities",
        "Managed hybrid technology infrastructure seamlessly integrating Microsoft Teams and Zoom",
        "Coordinated 13-member volunteer teams across Sydney and Melbourne markets", 
        "Achieved 85% engagement success rate measured through participation metrics and program onboarding conversions",
        "Successfully managed budget approval processes through project management oversight"
      ],
      technologies: ["Microsoft Teams", "Zoom", "Google Meet", "Project management tools", "Hybrid event technology"],
      impact: "Medium",
      color: "purple"
    }
  ]

  const skills = {
    "Data & Analytics": {
      items: [
        { name: "Python", description: "Developed through capstone computer vision project using face_recognition, NumPy, Pandas libraries. Enhanced at AusBiz Consulting internship working on AI/data solutions." },
        { name: "SQL & Database Design", description: "Mastered through Smart Attendance System capstone project - designed normalized relational database schema with 5+ interconnected tables following 3NF principles." },
        { name: "Excel & Data Analysis", description: "Applied in academic coursework and real-world data processing. Used for reporting, dashboard creation, and business intelligence analysis." },
        { name: "Data Pipeline Development", description: "Built through AusBiz Consulting internship and personal projects involving ChromaDB, Upstash vector databases, and data processing workflows." }
      ],
      color: "blue"
    },
    "Programming & Development": {
      items: [
        { name: "TypeScript/JavaScript", description: "Self-taught through building interactive resume platform with Next.js 15, React 19. Applied in full-stack development with modern frameworks." },
        { name: "Next.js/React", description: "Acquired while creating first-of-its-kind interactive resume technology. Built with Next.js 15, React 19, Server Components, and modern web standards." },
        { name: "Flask Web Development", description: "Learned through Smart Attendance System capstone project. Built complete web application with database integration, authentication, and role-based access control." },
        { name: "Git/GitHub", description: "Professional development workflow including version control, collaborative development, and project management across multiple repositories." }
      ],
      color: "green"
    },
    "Specialized Technologies": {
      items: [
        { name: "AI/ML & Vector Databases", description: "Developed through building RAG systems with ChromaDB, Upstash vector databases. Integrated AI agents, embeddings, and Claude Sonnet 4.0 for intelligent applications." },
        { name: "Computer Vision", description: "Implemented face recognition system using face_recognition library with 128-dimensional facial encoding. Built complete image processing pipeline with NumPy and Pillow." },
        { name: "Cloud Development", description: "Applied through coursework in Cloud Application Development and deployment of interactive resume platform on Vercel with serverless architecture." },
        { name: "Development Tools", description: "Professional environment setup including VS Code, GitHub Copilot for 60%+ code generation, Claude Sonnet 4.0 for architectural decisions, and modern development workflows." }
      ],
      color: "purple"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          .no-print { display: none !important; }
          .print-break { page-break-before: always; }
          body { background: white !important; }
          .container { max-width: 100% !important; margin: 0 !important; padding: 20px !important; }
          .shadow-xl { box-shadow: none !important; }
          .rounded-lg { border-radius: 0 !important; }
          .bg-gradient-to-r { background: #1e40af !important; }
          .text-blue-100 { color: #dbeafe !important; }
          .bg-gradient-to-br { background: white !important; }
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .slide-in {
          animation: slideIn 0.6s ease-out;
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .skill-bar {
          position: relative;
          background: #e5e7eb;
          height: 6px;
          border-radius: 3px;
          overflow: hidden;
        }
        
        .skill-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #1d4ed8);
          border-radius: 3px;
          animation: fillBar 1.5s ease-out;
        }
        
        @keyframes fillBar {
          from { width: 0%; }
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
      `}</style>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header Actions */}
        <div className="flex justify-between items-center mb-8 no-print">
          <div className="flex gap-4">
            <Button 
              onClick={handleEmailClick} 
              className="bg-green-600 hover:bg-green-700 transition-all duration-300"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact Me
            </Button>
            <Button 
              onClick={handleLinkedInClick} 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <Linkedin className="h-4 w-4 mr-2" />
              LinkedIn
            </Button>
          </div>
          <Button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700 transition-all duration-300">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Hero Section */}
        <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden mb-8 ${isVisible ? 'fade-in' : ''}`}>
          {/* Header Section with Enhanced Visual Design */}
          <div className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-700 text-white p-12 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-black opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500 bg-opacity-20 border border-green-400 mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-green-100 text-sm font-medium">Available for Immediate Hire</span>
              </div>
              
              <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Binal Shah
              </h1>
              
              <div className="flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-blue-300 mr-3" />
                <p className="text-2xl text-blue-100 font-light">Junior Data Analyst | Python, SQL & Data Analytics</p>
              </div>
              
              {/* Key Value Propositions */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge className="bg-blue-600 bg-opacity-50 text-white border-blue-400 px-4 py-2 text-sm">
                  <Zap className="h-4 w-4 mr-2" />
                  Python & SQL Expert
                </Badge>
                <Badge className="bg-indigo-600 bg-opacity-50 text-white border-indigo-400 px-4 py-2 text-sm">
                  <Code className="h-4 w-4 mr-2" />
                  Data Pipeline Development
                </Badge>
                <Badge className="bg-purple-600 bg-opacity-50 text-white border-purple-400 px-4 py-2 text-sm">
                  <Users className="h-4 w-4 mr-2" />
                  Team Leadership
                </Badge>
              </div>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                <div className="flex items-center justify-center bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
                  <Mail className="h-5 w-5 text-blue-200 mr-3" />
                  <div className="text-left">
                    <p className="text-blue-100 text-sm">Email</p>
                    <p className="text-white font-medium">sbinal182@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
                  <Phone className="h-5 w-5 text-blue-200 mr-3" />
                  <div className="text-left">
                    <p className="text-blue-100 text-sm">Phone</p>
                    <p className="text-white font-medium">0403 892 199</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
                  <Linkedin className="h-5 w-5 text-blue-200 mr-3" />
                  <div className="text-left">
                    <p className="text-blue-100 text-sm">LinkedIn</p>
                    <p className="text-white font-medium">linkedin.com/in/binalshah</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
                  <MapPin className="h-5 w-5 text-blue-200 mr-3" />
                  <div className="text-left">
                    <p className="text-blue-100 text-sm">Location</p>
                    <p className="text-white font-medium">Hornsby, NSW 2077</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary - Enhanced */}
        <div className={`bg-white rounded-2xl shadow-xl p-8 mb-8 hover-lift ${isVisible ? 'slide-in' : ''}`}>
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl mr-4">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Professional Summary</h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong className="text-blue-700">Recent IT graduate</strong> with hands-on experience in <strong>Python, SQL, and database design</strong>. 
              Built <strong>data pipelines, designed relational databases</strong>, and created analytics systems through academic and internship projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Proven leadership through <strong>training 6+ team members</strong> and coordinating <strong>200+ person events</strong>. 
              Seeking <strong>Junior Data Analyst role</strong> to apply technical skills and grow toward Data Engineering with 
              <strong>2+ years customer experience excellence</strong>.
            </p>
          </div>
          
          <div className="bg-gray-900 text-white p-6 rounded-xl">
            <div className="flex items-center mb-3">
              <Star className="h-5 w-5 text-yellow-400 mr-2" />
              <strong className="text-yellow-400">Career Objective</strong>
            </div>
            <p className="text-gray-100">
              Junior Data Analyst specializing in Python, SQL, and data analytics seeking to grow toward Data Engineering
            </p>
          </div>
        </div>

        {/* Key Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { icon: TrendingUp, value: "40%", label: "Onboarding Time Reduction", color: "green" },
            { icon: Users, value: "6+", label: "Team Members Trained", color: "blue" },
            { icon: Award, value: "200+", label: "Event Participants Led", color: "purple" },
            { icon: Zap, value: "85%", label: "Engagement Success Rate", color: "orange" }
          ].map((metric, index) => (
            <Card key={index} className="hover-lift bg-white">
              <CardContent className="p-6 text-center">
                <div className={`bg-${metric.color}-100 p-3 rounded-full inline-block mb-4`}>
                  <metric.icon className={`h-6 w-6 text-${metric.color}-600`} />
                </div>
                <div className={`text-3xl font-bold text-${metric.color}-600 mb-2`}>{metric.value}</div>
                <div className="text-gray-600 text-sm">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Experience */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-3 rounded-xl mr-4">
              <Briefcase className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline connector */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-200 z-0"></div>
                )}
                
                <div className="relative bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-100">
                  {/* Experience Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`bg-${exp.color}-600 p-3 rounded-xl mr-4 relative z-10`}>
                        <Building className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </span>
                          <Badge variant="outline" className={`border-${exp.color}-300 text-${exp.color}-700`}>
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience Description */}
                  <p className="text-gray-700 mb-6 pl-16">{exp.description}</p>

                  {/* Key Achievements */}
                  <div className="pl-16">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-yellow-500" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Code className="h-5 w-5 mr-2 text-blue-500" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl mr-4">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data], index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 pb-3 border-b-2 border-gray-200">
                  {category}
                </h3>
                <div className="space-y-4">
                  {data.items.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                        <Badge variant="outline" className="border-gray-400 text-gray-600 text-xs">
                          {category.split(' ')[0]}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Projects */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-8">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-3 rounded-xl mr-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Key Projects</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Digital Twin Project */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 p-2 rounded-lg mr-3">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">My Digital Twin - AI-Powered Professional Platform</h3>
                  <p className="text-blue-600 font-medium">Lead Developer | Jul 2025 - Sep 2025</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Revolutionary AI-powered platform that transforms static resumes into interactive, intelligent systems 
                for recruiter engagement using spec-driven development methodology.
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Outcomes:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Positioned AusBiz Consulting as digital HR technology innovator
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Implemented dual-vector database architecture for optimized performance
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Created first-of-its-kind interactive resume technology using vector embeddings
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-1">
                {["Next.js 15", "React 19", "Claude Sonnet 4.0", "ChromaDB", "Vector Embeddings"].map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs bg-blue-200 text-blue-800">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Smart Attendance System */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 p-2 rounded-lg mr-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Smart Attendance System - Computer Vision Capstone</h3>
                  <p className="text-green-600 font-medium">Full-Stack Developer | Academic Project</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Comprehensive role-based attendance management system using facial recognition technology 
                with three-tier access control and automated tracking capabilities.
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Complete role-based attendance management system
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Secure facial recognition with local processing
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Comprehensive admin dashboard with full system access
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-1">
                {["Python 3.8+", "Flask", "SQLite", "face_recognition", "NumPy"].map((tech, i) => (
                  <Badge key={i} variant="secondary" className="text-xs bg-green-200 text-green-800">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Core Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 rounded-xl mr-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Information Technology</h3>
              <p className="text-indigo-600 font-semibold mb-2">Victoria University | Sydney, Australia</p>
              <p className="text-gray-700 mb-4">
                <strong>Graduated:</strong> September 2025
              </p>

              <h4 className="font-semibold text-gray-900 mb-3">Relevant Coursework:</h4>
              <div className="space-y-2 text-sm text-gray-700">
                {[
                  "Web & Mobile Development - Applied to Next.js 15 + React 19 Digital Twin project",
                  "Cloud Application Development - Used in Vercel and AWS integration strategies", 
                  "Data Analytics for Cyber Security - Informed AI/data engineering security approach",
                  "Big Data - Applied to RAG system design and data processing",
                  "ICT Business Analytics - Used in attendance system reporting and analytics"
                ].map((course, i) => (
                  <div key={i} className="flex items-start">
                    <ChevronRight className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-3 rounded-xl mr-4">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Core Competencies</h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Leadership & Team Management",
                  items: [
                    "Trained and mentored 6+ new hires with measurable improvement in retention",
                    "Coordinated 13-member volunteer teams across Sydney and Melbourne",
                    "Reduced onboarding time by 40% through systematic training approach"
                  ]
                },
                {
                  title: "Technical Communication", 
                  items: [
                    "Created technical documentation using AI-assisted tools",
                    "Successfully communicated complex AI concepts during AusBiz internship",
                    "Presented to 200+ student audiences in workshop environments"
                  ]
                },
                {
                  title: "Problem-Solving & Innovation",
                  items: [
                    "Pioneered spec-driven development methodology with AI tools",
                    "Created first-of-its-kind interactive resume technology", 
                    "Resolved multi-AI tool conflicts through prompt optimization"
                  ]
                }
              ].map((competency, index) => (
                <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 text-yellow-600 mr-2" />
                    {competency.title}
                  </h3>
                  <div className="space-y-1">
                    {competency.items.map((item, i) => (
                      <div key={i} className="flex items-start text-sm text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 no-print">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <p className="text-gray-600 mb-4">
              This resume is powered by AI technology and demonstrates the interactive Digital Twin platform I developed at AusBiz Consulting
            </p>
            <div className="flex justify-center gap-4">
              <Button onClick={handleEmailClick} className="bg-green-600 hover:bg-green-700">
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </Button>
              <Button onClick={handleLinkedInClick} variant="outline">
                <Linkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}