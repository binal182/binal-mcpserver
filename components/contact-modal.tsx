"use client"

import { useState } from "react"
import { X, Mail, Phone, MapPin, Linkedin, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { personalInfo } from "@/lib/resume-data"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  if (!isOpen) return null

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)
      setTimeout(() => setCopiedField(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.contact.email,
      displayValue: personalInfo.contact.email,
      action: () => window.open(`mailto:${personalInfo.contact.email}`, '_blank')
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.contact.phone,
      displayValue: personalInfo.contact.phone,
      action: () => window.open(`tel:${personalInfo.contact.phone.replace(/\s/g, '')}`, '_blank')
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: `https://${personalInfo.contact.linkedin}`,
      displayValue: personalInfo.contact.linkedin,
      action: () => window.open(`https://${personalInfo.contact.linkedin}`, '_blank')
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      displayValue: personalInfo.location,
      action: null
    }
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 mb-6">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">{item.label}</p>
                    <p className="text-gray-900 font-medium">{item.displayValue}</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(item.value, item.label)}
                    className="flex items-center space-x-1"
                  >
                    {copiedField === item.label ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                  
                  {item.action && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={item.action}
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                    >
                      Open
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Quick Actions</h3>
            
            <Button
              className="w-full bg-black hover:bg-gray-800 text-white"
              onClick={() => window.open(`mailto:${personalInfo.contact.email}?subject=Hello Binal&body=Hi Binal,%0D%0A%0D%0AI'd like to get in touch with you.%0D%0A%0D%0ABest regards`, '_blank')}
            >
              <Mail className="h-4 w-4 mr-2" />
              Send Email
            </Button>
            
            <Button
              variant="outline"
              className="w-full border-black text-black hover:bg-black hover:text-white"
              onClick={() => window.open(`https://${personalInfo.contact.linkedin}`, '_blank')}
            >
              <Linkedin className="h-4 w-4 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>

          {/* Note */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Best way to reach me:</strong> Email for detailed discussions, phone for urgent matters, or LinkedIn for professional networking.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}