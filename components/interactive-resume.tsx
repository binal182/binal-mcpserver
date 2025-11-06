"use client"

import { useState } from "react"
import { Search, MessageCircle, Loader2, User, RotateCcw, Brain } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { searchResumeData } from "@/app/actions/resume-actions"

interface ChatMessage {
  id: string
  type: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export function InteractiveResume() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'assistant',
      content: "Hello! I'm Binal's interactive resume assistant. Ask me anything about her background, skills, experience, or projects. I remember our conversation, so feel free to ask follow-up questions!\n\n• What programming languages does Binal know?\n• Tell me about Binal's work experience\n• What projects has she worked on?\n• What are Binal's achievements?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isUsingContext, setIsUsingContext] = useState(false)

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentQuery = inputValue.trim()
    setInputValue("")
    setIsLoading(true)

    try {
      // Get conversation context from recent messages (last 4 messages)
      const recentMessages = messages.slice(-4).filter(msg => msg.type === 'user')
      const conversationContext = recentMessages.map(msg => msg.content).join(' ')
      
      // Show context indicator if we have previous conversation
      if (conversationContext.trim()) {
        setIsUsingContext(true)
      }
      
      const result = await searchResumeData(currentQuery, conversationContext)
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: result.success ? result.data || "No information found." : `Error: ${result.error}`,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: "Sorry, I encountered an error while searching for information. Please try again.",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      setIsUsingContext(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    "What are Binal's technical skills?",
    "Tell me about Binal's work experience",
    "What projects has Binal worked on?",
    "Tell me more about that", // Follow-up example
    "When did she work there?" // Context-dependent example
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Interactive Resume Chat
              <Brain className="h-4 w-4 text-blue-500" title="Has conversation memory" />
            </CardTitle>
            {messages.length > 1 && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setMessages([messages[0]])} // Keep only the initial message
                className="text-xs"
              >
                <RotateCcw className="h-3 w-3 mr-1" />
                Clear History
              </Button>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            Ask me anything about Binal's professional background. I remember our conversation context for follow-up questions!
          </p>
        </CardHeader>
        <CardContent>
          {/* Quick Questions */}
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setInputValue(question)}
                  disabled={isLoading}
                  className="text-xs"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto space-y-4 mb-4 p-4 bg-gray-50 rounded-lg">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <div className="whitespace-pre-wrap">
                    <MessageContent content={message.content} isUser={message.type === 'user'} />
                  </div>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {isUsingContext && (
                      <span className="text-xs text-blue-600 flex items-center gap-1">
                        <Brain className="h-3 w-3" />
                        Using conversation context
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Binal's experience, skills, projects..."
              disabled={isLoading}
              className="flex-1"
            />
            <Button onClick={handleSendMessage} disabled={isLoading || !inputValue.trim()}>
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Component to render message content with proper formatting
function MessageContent({ content, isUser }: { content: string; isUser: boolean }) {
  if (isUser) {
    return <span>{content}</span>
  }

  // Format the assistant's response
  const lines = content.split('\n')
  
  return (
    <div className="space-y-2">
      {lines.map((line, index) => {
        // Handle bullet points
        if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
          return (
            <div key={index} className="text-sm text-gray-700 ml-2">
              {line.trim()}
            </div>
          )
        }
        
        // Handle bold text
        if (line.includes('**')) {
          const parts = line.split(/(\*\*.*?\*\*)/g)
          return (
            <p key={index} className="text-gray-800">
              {parts.map((part, partIndex) => 
                part.startsWith('**') && part.endsWith('**') ? (
                  <strong key={partIndex} className="text-gray-900">
                    {part.slice(2, -2)}
                  </strong>
                ) : (
                  <span key={partIndex}>{part}</span>
                )
              )}
            </p>
          )
        }
        
        // Handle search result headers
        if (line.includes('🔍')) {
          return (
            <div key={index} className="text-sm font-medium text-blue-600 border-b border-blue-100 pb-1">
              {line}
            </div>
          )
        }
        
        // Regular text
        if (line.trim()) {
          return <p key={index} className="text-gray-700">{line}</p>
        }
        
        return null
      })}
    </div>
  )
}