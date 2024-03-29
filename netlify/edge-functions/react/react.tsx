import React from "https://esm.sh/react@18";
import { renderToReadableStream } from "https://esm.sh/v96/react-dom@18.2.0/deno/server.js";

export default async function handler(req: Request) {
  const url = new URL(req.url);
  const username = url.searchParams.get("username");

  if (!username) {
    url.searchParams.set("username", "netlify");
    return Response.redirect(url.toString(), 302);
  }

  const controller = new AbortController();
  let didError = false;
  try {
    const stream = await renderToReadableStream(
      <html>
        <title>Hello</title>
        <body>
          <h1>Hello {username}</h1>
        </body>
      </html>,
      {
        signal: controller.signal,
        onError(error: unknown) {
          didError = true;
          console.error(error);
        },
      },
    );

    return new Response(stream, {
      status: didError ? 500 : 200,
      headers: { "Content-Type": "text/html" },
    });
  } catch (error) {
    return new Response(
      "<!doctype html><p>Something went wrong</p>",
      {
        status: 500,
        headers: { "Content-Type": "text/html" },
      },
    );
  }
}
