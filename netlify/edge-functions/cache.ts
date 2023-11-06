export default async function handler(req: Request) {
  console.log(req)
  const url = new URL(req.url)
  return Response.json({ requrl: req.url, pathname: url.pathname, req: Object.entries(req), url });
}

export const config = {
  path: "/url/*",
}