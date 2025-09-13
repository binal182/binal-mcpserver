https://github.com/gocallum/rolldice-mcpserver.git : It is a roll dice mcp server we want to use same technology and same pattern to create our own mcp server.
https://github.com/binal182/binal_digital-twin_py.git  it is python code using upstash vector to search the RAG and we use groq and llama to provide the generations. 
the purpose of this app is to build the mcp server using the roll dice pattern.

. mcp server will accept the user question about binal 
.create a server action which will searches upstash vector data base and returns the RAG results. the logic to search will be exactly the same as python version.
use the following environment variables in .env
UPSTASH_VECTOR_REST_URL=
UPSTASH_VECTOR_REST_TOKEN=

important references to study:
https://upstash.com/docs/vector/overall/getstarted
https://upstash.com/docs/vector/features/embeddingmodels information about how to access the upstash database and use the built in embedding models.
example of how to use upstash to do a rag search:
import { Index } from "@upstash/vector"

const index = new Index({
  url: "UPSTASH_VECTOR_REST_URL",
  token: "UPSTASH_VECTOR_REST_TOKEN",
})

await index.query({
  data: "What is Upstash?",
  topK: 1,
  includeMetadata: true,
})
links to using the upstash sdk 
https://upstash.com/docs/vector/sdks/ts/getting-started
additional instructions:
always use server actions where possible.
always use pnpm.
always use windows powershell commands.
always have strong typesafety.
i am using nextjs15.5.2
use pnpm dlx shadcn@latest init https://ui.shadcn.com/docs/installation/next