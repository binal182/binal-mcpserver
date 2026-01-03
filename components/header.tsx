"use client"

import { useState, useEffect } from "react"
import { Brain, Github, Menu, X, Download, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ContactModal } from "@/components/contact-modal"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

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
            <a 
              href="/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Portfolio
            </a>
            <button 
              onClick={() => scrollToSection('about-section')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Experience
            </button>
            <a 
              href="/resume" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Resume
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-gray-300 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsContactModalOpen(true)}
            >
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
            
            <a href="/portfolio" download="Binal_Shah_Portfolio.pdf">
              <Button size="sm" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                <Download className="h-4 w-4 mr-2" />
                Download Portfolio
              </Button>
            </a>

            <a href="/resume" download="Binal_Shah_Resume.pdf">
              <Button size="sm" className="bg-black hover:bg-gray-800 text-white">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
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
              <a 
                href="/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-gray-700 hover:text-black transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </a>
              <button 
                onClick={() => scrollToSection('about-section')}
                className="text-left text-gray-700 hover:text-black transition-colors font-medium px-4 py-2"
              >
                Experience
              </button>
              <a 
                href="/resume" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-left text-gray-700 hover:text-black transition-colors font-medium px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </a>
              
              {/* Mobile Action Buttons */}
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="justify-start border-gray-300 text-gray-700"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setIsContactModalOpen(true)
                  }}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Me
                </Button>
                
                <a href="/portfolio" download="Binal_Shah_Portfolio.pdf">
                  <Button size="sm" variant="outline" className="justify-start border-gray-300 text-gray-700 w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Portfolio
                  </Button>
                </a>

                <a href="/resume" download="Binal_Shah_Resume.pdf">
                  <Button size="sm" className="justify-start bg-black hover:bg-gray-800 text-white w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
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
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </header>
  )
}