export default async function handler(req: Request) {
  return Response.json({ url: req.url });
}

export const config = {
  path: "/url/*",
}