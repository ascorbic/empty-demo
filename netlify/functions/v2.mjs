// server.ts
console.log("server.ts");
function handler(request, context) {
  return console.log("handler"), new Response("hello world");
}
var config = {
  path: "/*"
};
export {
  config,
  handler as default
};
