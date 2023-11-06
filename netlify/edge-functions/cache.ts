export default async function handler(req: Request) {
  console.log(req.url)
  return Response.json({ url: req.url });
}

export const config = {
  path: "/url/*",
}