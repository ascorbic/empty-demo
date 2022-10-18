import { ImageResponse } from "https://deno.land/x/og_edge/mod.ts";
import React from "https://esm.sh/react@18.2.0";

// deno-lint-ignore require-await
export default async function handler(req: Request) {
  const url = new URL(req.url);
  const username = url.searchParams.get("username");
  if (!username) {
    return new ImageResponse(<>Visit with &quot;?username=netlify&quot;</>, {
      width: 1200,
      height: 630,
    });
  }

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        fontSize: 60,
        color: "black",
        background: "#f6f6f6",
        width: "100%",
        height: "100%",
        paddingTop: 50,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        width="256"
        height="256"
        src={`https://github.com/${username || "netlify"}.png`}
        style={{
          borderRadius: 128,
        }}
      />
      {username
        ? <p>github.com/{username}</p>
        : <p>Visit with &quot;?username=netlify&quot;</p>}
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
