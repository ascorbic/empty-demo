import { OpenAIStream, StreamingTextResponse } from 'https://esm.sh/ai'
import { Configuration, OpenAIApi } from 'https://esm.sh/openai-edge'
import type { Config } from 'https://edge.netlify.com/'

// Create an OpenAI API client (that's edge friendly!)
const conf = new Configuration({
  apiKey: Deno.env.get('OPENAI_API_KEY')
})
const openai = new OpenAIApi(conf)

 
export default async function POST(req: Request) {
  // Extract the `messages` from the body of the request
//   const { messages } = await req.json()
//  console.log(messages)
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    	"messages": [
		{
			"role": "user",
			"content": "Hello! Recommend three cocktails for me and give the recipes"
		}
	]
  })
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)



  // Respond with the stream
  const res = new StreamingTextResponse(stream)
  console.log(res, stream)
    return res
}

export const config: Config = {
    path: '/ai',
}