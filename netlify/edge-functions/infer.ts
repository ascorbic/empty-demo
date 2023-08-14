import { env, pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.5.0'

env.useBrowserCache = false
env.allowLocalModels = false


// Construct pipeline outside of serve for faster warm starts
const pipe = await pipeline(
  'feature-extraction',
  'Supabase/gte-small',
)

// Deno Handler
export default async function handler(req: Request) {
const { input } = await req.json()

  // Generate the embedding from the user input
  const output = await pipe(input, {
    pooling: 'mean',
    normalize: true,
  })

  // Get the embedding output
  const embedding = Array.from(output.data)


  // Return the embedding
  return new Response(
    JSON.stringify({ embedding }),
    { headers: { 'Content-Type': 'application/json' } },
   )
}
