import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:sbinal182@gmail.com" className="hover:text-white transition-colors">
                  sbinal182@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4" />
                <a href="tel:+61403892199" className="hover:text-white transition-colors">
                  +61 403 892 199
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Melbourne, Victoria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <a href="/resume" target="_blank" className="block text-gray-300 hover:text-white transition-colors">
                Full Resume
              </a>
              <button 
                onClick={() => {
                  const resumeTab = document.querySelector('[value="resume"]') as HTMLElement
                  resumeTab?.click()
                }}
                className="block text-left text-gray-300 hover:text-white transition-colors"
              >
                Interactive Chat
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('about-section')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="block text-left text-gray-300 hover:text-white transition-colors"
              >
                About & Experience
              </button>
            </div>
          </div>

          {/* Technical Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Technical Resources</h3>
            <div className="space-y-3">
              <a 
                href="https://github.com/binal182" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                GitHub Profile
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://modelcontextprotocol.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                Model Context Protocol
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://upstash.com/docs/vector" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                Upstash Vector Docs
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Social & Professional */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6">Connect</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
              <div className="text-gray-400 text-sm">
                <p>Open to new opportunities</p>
                <p>Available for collaborations</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            <p>© {currentYear} Binal Shah. All rights reserved.</p>
          </div>
          
          <div className="text-gray-400 text-sm text-center md:text-right">
            <p className="flex items-center gap-1 justify-center md:justify-end">
              Built with 
              <Heart className="w-3 h-3 text-red-500" fill="currentColor" />
              using Next.js, RAG Technology & MCP
            </p>
          </div>
        </div>

        {/* Technology Stack Footer Note */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-xs">
            Powered by Next.js 15 • Upstash Vector Database • Model Context Protocol • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}