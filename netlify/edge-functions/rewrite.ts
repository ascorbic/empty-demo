import { Context } from "https://edge.netlify.com/";

export default async function handler(req: Request, context: Context) {

  const url = new URL("/.netlify/functions/hello/anything", req.url);
  url.searchParams.set("hello", "world");
  const destination = url.toString().slice(url.origin.length)
  console.log({ destination })
  return context.rewrite(destination)
}

