import { Config } from "@netlify/functions";
export default function handler(request, context) {
  return new Response("Hello from v2");
}
export const config: Config = {
  path: "/*",
  preferStatic: true,
};
