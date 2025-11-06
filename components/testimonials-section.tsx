"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  User,
  Building,
  LinkedinIcon,
  Calendar
} from "lucide-react"
import { references } from "@/lib/resume-data"

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('testimonials-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      quote: "Binal showed exceptional dedication and analytical skills during her time with us. Her ability to work with data analysis tools and contribute to AI-driven solutions was impressive. She demonstrated strong learning agility and teamwork.",
      author: "Data Team Supervisor",
      role: "Senior Data Analyst",
      company: "AusBiz Consulting",
      rating: 5,
      relationship: "Direct Supervisor",
      project: "AI/Data Analytics Internship",
      duration: "6 months",
      outcomes: ["Contributed to data analysis projects", "Learned advanced analytics tools", "Supported AI solution development"]
    },
    {
      quote: "Binal was an outstanding team leader who consistently demonstrated strong work ethic and excellent customer service. Her training and mentoring of new team members was particularly valuable to our operations.",
      author: "Store Manager",
      role: "Operations Manager",
      company: "Zeus Street Greek",
      rating: 5,
      relationship: "Direct Manager",
      project: "Team Leadership & Training",
      duration: "2+ years",
      outcomes: ["Trained 6+ new hires", "High customer satisfaction", "Reduced onboarding time"]
    },
    {
      quote: "As a coordinator, Binal showed excellent organizational skills and leadership abilities. She successfully managed multiple events and demonstrated strong communication skills working with diverse teams across different cities.",
      author: "Program Director",
      role: "Regional Director",
      company: "Students for Liberty",
      rating: 5,
      relationship: "Program Supervisor",
      project: "Event Coordination & Outreach",
      duration: "Ongoing",
      outcomes: ["200+ event participants", "Multi-city coordination", "Strong engagement results"]
    },
    {
      quote: "Binal is pursuing advanced studies with great focus and demonstrates strong technical aptitude. Her work in data analytics and cybersecurity shows promise for her future career in technology.",
      author: "Academic Advisor",
      role: "Senior Lecturer",
      company: "Victoria University",
      rating: 5,
      relationship: "Academic Mentor",
      project: "IT Studies & Specializations",
      duration: "Current",
      outcomes: ["Strong academic performance", "Technical skill development", "Industry-relevant coursework"]
    }
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <section id="testimonials-section" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Colleagues Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional references and testimonials from managers, colleagues, and mentees across different organizations and projects.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className={`max-w-6xl mx-auto ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
          <Card className="p-8 lg:p-12 bg-white text-black border-2 hover:border-gray-300 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Quote Section */}
              <div className="lg:col-span-2">
                <Quote className="w-12 h-12 text-gray-400 mb-6" />
                <blockquote className="text-lg lg:text-xl leading-relaxed mb-8 italic">
                  "{currentTestimonial.quote}"
                </blockquote>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600">({currentTestimonial.rating}/5)</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{currentTestimonial.author}</h4>
                    <p className="text-gray-600">{currentTestimonial.role}</p>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Building className="w-4 h-4" />
                      <span>{currentTestimonial.company}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-1 bg-gray-50 p-6 rounded-lg">
                <h5 className="font-bold mb-4 text-lg">Project Details</h5>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Relationship:</span>
                    <Badge variant="outline" className="ml-2 border-black text-black">
                      {currentTestimonial.relationship}
                    </Badge>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-600">Project:</span>
                    <p className="text-sm font-medium mt-1">{currentTestimonial.project}</p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-600">Duration: {currentTestimonial.duration}</span>
                  </div>
                </div>

                <div>
                  <h6 className="font-semibold mb-3 text-gray-800">Key Outcomes:</h6>
                  <ul className="space-y-2">
                    {currentTestimonial.outcomes.map((outcome, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Navigation Controls */}
        <div className={`flex justify-center items-center gap-4 mt-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="border-white text-white hover:bg-white hover:text-black"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="border-white text-white hover:bg-white hover:text-black"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Summary Stats */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">5.0/5</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">4+</div>
            <div className="text-gray-400">Professional References</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">Would Recommend</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">2+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Card className="p-8 bg-white text-black inline-block max-w-2xl mx-auto border-2">
            <h3 className="text-2xl font-bold mb-4">Want to Speak with References?</h3>
            <p className="text-gray-600 mb-6">
              I'm happy to connect you with any of my professional references to discuss my work, leadership style, and contributions in more detail.
            </p>
            <a href="mailto:sbinal182@gmail.com?subject=Reference Contacts Request&body=Hi Binal,%0D%0A%0D%0AI'd like to speak with your professional references to learn more about your work and contributions.%0D%0A%0D%0APlease let me know how to connect with them.%0D%0A%0D%0ABest regards">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                Request Reference Contacts
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  )
}