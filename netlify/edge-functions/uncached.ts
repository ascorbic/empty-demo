export default async function handler(req: Request) {
  console.log("Request URL", req.url);
  return Response.json({ url: req.url });
}

export const config = {
  path: "/uncached/*",
}