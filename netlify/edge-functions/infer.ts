import { env, pipeline } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers'

env.useBrowserCache = false
env.allowLocalModels = false
env.backends.onnx.wasm.numThreads = 1;


// Construct pipeline outside of serve for faster warm starts
const pipe = await pipeline(
  'feature-extraction',
  'Supabase/gte-small',
)

// Deno Handler
export default async function handler(req: Request) {
const { input } = await req.json()
  console.time('inference')
  // Generate the embedding from the user input
  const output = await pipe(input, {
    pooling: 'mean',
    normalize: true,
  })
  console.timeEnd('inference')
  // Get the embedding output
  const embedding = Array.from(output.data)


  // Return the embedding
  return new Response(
    JSON.stringify({ embedding }),
    { headers: { 'Content-Type': 'application/json' } },
   )
}

export const config = {
    path: '/embeddings',
}