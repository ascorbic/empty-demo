export default function handler(request, context) {
    setTimeout(() => {
        console.log("timeout");
    }, 5000);
    return new Response("hello world");
}
export const config = {
    path: "/v2"
};
