// app/api/[transport]/route.ts
import { createMcpHandler } from "mcp-handler";
import { searchBinalKnowledge, searchBinalTool } from "@/lib/rag-search";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      searchBinalTool.name,
      searchBinalTool.description,
      searchBinalTool.schema,
      async ({ query }) => {
        // Use the shared RAG search logic
        const result = await searchBinalKnowledge(query);
        return {
          content: [result],
        };
      }
    );
  },
  {
    // Optional server options
  },
  {
    // No Redis config - disable Redis requirement
    basePath: "/api", // this needs to match where the [transport] is located.
    maxDuration: 60,
    verboseLogs: true,
  }
);

export { handler as GET, handler as POST };