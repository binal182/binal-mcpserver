import { Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function UsageGuide() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Search className="h-5 w-5" />
          <span>How to Search Binal&apos;s Knowledge</span>
        </CardTitle>
        <CardDescription>
          Once configured, you can ask Claude questions about Binal in natural language.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-3">Example Questions:</h4>
          <div className="grid gap-4">
            <Card className="p-4">
              <p className="font-medium text-sm mb-2">Professional Experience:</p>
              <p className="text-muted-foreground italic">&quot;What programming languages does Binal know?&quot;</p>
              <Separator className="my-2" />
              <p className="text-sm">🔍 **Search Results for &quot;What programming languages does Binal know?&quot;**...</p>
            </Card>
            
            <Card className="p-4">
              <p className="font-medium text-sm mb-2">Educational Background:</p>
              <p className="text-muted-foreground italic">&quot;Tell me about Binal&apos;s education&quot;</p>
              <Separator className="my-2" />
              <p className="text-sm">🔍 **Search Results for &quot;Tell me about Binal&apos;s education&quot;**...</p>
            </Card>
            
            <Card className="p-4">
              <p className="font-medium text-sm mb-2">Project Experience:</p>
              <p className="text-muted-foreground italic">&quot;What AI/ML projects has Binal worked on?&quot;</p>
              <Separator className="my-2" />
              <p className="text-sm">🔍 **Search Results for &quot;What AI/ML projects has Binal worked on?&quot;**...</p>
            </Card>
            
            <Card className="p-4">
              <p className="font-medium text-sm mb-2">Technical Skills:</p>
              <p className="text-muted-foreground italic">&quot;What is Binal&apos;s experience with vector databases?&quot;</p>
              <Separator className="my-2" />
              <p className="text-sm">🔍 **Search Results for &quot;What is Binal&apos;s experience with vector databases?&quot;**...</p>
            </Card>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Search Categories:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "Programming Languages",
              "AI/ML Experience", 
              "Project Portfolio",
              "Educational Background",
              "Technical Skills",
              "Work Experience",
              "Tools & Frameworks",
              "Certifications",
              "Industry Knowledge"
            ].map((category) => (
              <Badge key={category} variant="outline" className="justify-center py-2">
                {category}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            + Any other questions about Binal&apos;s professional background
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Use Cases:</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2">
              <span className="text-primary">•</span>
              <span><strong>Technical Interviews:</strong> Learn about Binal&apos;s technical expertise and experience</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary">•</span>
              <span><strong>Project Collaboration:</strong> Understand Binal&apos;s skills for team projects</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary">•</span>
              <span><strong>Professional Networking:</strong> Get to know Binal&apos;s background and interests</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary">•</span>
              <span><strong>Skill Assessment:</strong> Evaluate technical competencies and experience levels</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}