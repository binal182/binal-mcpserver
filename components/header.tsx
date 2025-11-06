"use client"

import { useState, useEffect } from "react"
import { Brain, Github, Menu, X, Download, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-black">Binal Shah</h1>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs border-black text-black">
                  Junior Data Analyst
                </Badge>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-600">Available</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about-section')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('about-section')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Experience
            </button>
            <button 
              className="text-gray-700 hover:text-black transition-colors font-medium"
              onClick={() => {
                const resumeTab = document.querySelector('[value="resume"]') as HTMLElement
                resumeTab?.click()
              }}
            >
              Interactive Resume
            </button>
            <a 
              href="/resume" 
              target="_blank"
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Full Resume
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="mailto:sbinal182@gmail.com?subject=Contact Inquiry&body=Hi Binal,%0D%0A%0D%0AI'd like to get in touch with you.%0D%0A%0D%0AYou can also reach me at 0403 892 199.%0D%0A%0D%0ABest regards">
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </a>
            
            <a href="mailto:sbinal182@gmail.com?subject=CV Request&body=Hi Binal,%0D%0A%0D%0ACould you please send me your latest CV/resume?%0D%0A%0D%0AYou can also reach me at 0403 892 199.%0D%0A%0D%0ABest regards">
              <Button size="sm" className="bg-black hover:bg-gray-800 text-white">
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </a>

            <Button variant="outline" size="sm" asChild className="border-gray-300 text-gray-700 hover:bg-gray-100">
              <a href="https://github.com/binal182" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden border-gray-300 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about-section')}
                className="text-left text-gray-700 hover:text-black transition-colors font-medium px-4 py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('about-section')}
                className="text-left text-gray-700 hover:text-black transition-colors font-medium px-4 py-2"
              >
                Experience
              </button>
              <button 
                className="text-left text-gray-700 hover:text-black transition-colors font-medium px-4 py-2"
                onClick={() => {
                  const resumeTab = document.querySelector('[value="resume"]') as HTMLElement
                  resumeTab?.click()
                  setIsMobileMenuOpen(false)
                }}
              >
                Interactive Resume
              </button>
              <a 
                href="/resume" 
                target="_blank"
                className="text-left text-gray-700 hover:text-black transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Full Resume
              </a>
              
              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                <a href="mailto:sbinal182@gmail.com?subject=Contact Inquiry&body=Hi Binal,%0D%0A%0D%0AI'd like to get in touch with you.%0D%0A%0D%0AYou can also reach me at 0403 892 199.%0D%0A%0D%0ABest regards">
                  <Button variant="outline" size="sm" className="justify-start border-gray-300 text-gray-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Me
                  </Button>
                </a>
                
                <a href="mailto:sbinal182@gmail.com?subject=CV Request&body=Hi Binal,%0D%0A%0D%0ACould you please send me your latest CV/resume?%0D%0A%0D%0AYou can also reach me at 0403 892 199.%0D%0A%0D%0ABest regards">
                  <Button size="sm" className="justify-start bg-black hover:bg-gray-800 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Download CV
                  </Button>
                </a>

                <Button variant="outline" size="sm" asChild className="justify-start border-gray-300 text-gray-700">
                  <a href="https://github.com/binal182" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub Profile
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}