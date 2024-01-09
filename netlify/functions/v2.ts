import { Config } from "@netlify/functions";
export default function handler(request, context) {
  setTimeout(() => console.log("timeout"), 5000);
  return new Response("Hello from v2");
}
export const config: Config = {
  path: "/*",
  preferStatic: true,
};
