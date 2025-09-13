import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <div className="text-center mb-12">
      <Badge variant="secondary" className="mb-4">
        🤖 Binal Digital Twin Ready
      </Badge>
      <h2 className="text-4xl font-bold mb-4">
        Ask Questions About Binal
      </h2>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        A powerful Model Context Protocol server that lets you search through Binal&apos;s professional knowledge base using advanced RAG (Retrieval-Augmented Generation) technology directly within Claude Desktop conversations.
      </p>
    </div>
  )
}