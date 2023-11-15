import type { Config, Context } from "@netlify/edge-functions";

export default async function handler(req: Request, context: Context) {
    return Response.json({
        url: req.url,
        params: context.params.param,
    });
}

export const config: Config = {
  path: "/path/:param",
  cache: "manual"
};
