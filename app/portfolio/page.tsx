import { projects, skills, workExperience, education, personalInfo } from "@/lib/resume-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Briefcase, GraduationCap } from "lucide-react"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          <nav className="flex gap-4">
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link href="#projects">
              <Button variant="ghost">Projects</Button>
            </Link>
            <Link href="#experience">
              <Button variant="ghost">Experience</Button>
            </Link>
            <Link href="#contact">
              <Button variant="ghost">Contact</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {personalInfo.title}
          </h2>
          <p className="text-2xl text-slate-600 mb-6">{personalInfo.subtitle}</p>
          <p className="text-lg text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.elevatorPitch}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href={`mailto:${personalInfo.contact.email}`}>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
            </a>
            <a href={`https://${personalInfo.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </a>
            <a href={`https://${personalInfo.contact.github}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-center mb-12 text-slate-800">Technical Skills</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.technical.map((category) => (
            <Card key={category.category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="text-sm" title={skill.context}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="max-w-4xl mx-auto mt-12">
          <h4 className="text-2xl font-bold text-center mb-6 text-slate-800">Leadership & Soft Skills</h4>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.softSkills.map((skill) => (
              <Card key={skill.skill} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{skill.skill}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skill.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Code className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h3>
            <p className="text-lg text-slate-600">Building innovative solutions with modern technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.name} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl text-blue-600">{project.name}</CardTitle>
                    {project.links.github && (
                      <a href={`https://${project.links.github}`} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="ghost">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-slate-700 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="bg-blue-50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-slate-700 mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {project.outcomes.slice(0, 3).map((outcome, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Work Experience</h3>
          </div>
          
          <div className="space-y-8">
            {workExperience.map((job, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl text-blue-600">{job.position}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {job.company} • {job.location}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{job.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">Key Achievements</h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-slate-600 flex items-start">
                          <span className="text-blue-600 mr-2">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-16 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Education</h3>
          </div>
          
          {education.map((edu, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-xl text-blue-600">{edu.degree}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      {edu.institution} • {edu.location}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary">{edu.graduation}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">Field: {edu.field}</p>
                {edu.relevantCoursework && (
                  <div>
                    <h4 className="font-semibold text-sm text-slate-700 mb-2">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCoursework.map((course) => (
                        <Badge key={course} variant="outline" className="bg-blue-50">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-slate-800 mb-6">Let's Work Together</h3>
          <p className="text-lg text-slate-600 mb-8">
            I'm currently seeking opportunities as a Junior Data Analyst. 
            Feel free to reach out if you'd like to discuss how I can contribute to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`mailto:${personalInfo.contact.email}`}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                <Mail className="mr-2 h-5 w-5" />
                {personalInfo.contact.email}
              </Button>
            </a>
            <a href={`tel:${personalInfo.contact.phone.replace(/\s/g, '')}`}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                {personalInfo.contact.phone}
              </Button>
            </a>
          </div>
          <p className="text-sm text-slate-500 mt-8">
            📍 {personalInfo.location}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2025 {personalInfo.name}. Built with Next.js, React, and TypeScript.
          </p>
          <div className="flex gap-6 justify-center mt-4">
            <a href={`https://${personalInfo.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href={`https://${personalInfo.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={`mailto:${personalInfo.contact.email}`} className="text-slate-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
