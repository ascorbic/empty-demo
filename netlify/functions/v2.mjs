export default function handler(request, context) {
    setTimeout(() => {
        console.log("timeout");
    }, 5000);

    const body = new ReadableStream({

        start(controller) {
            controller.enqueue("Wait...\n\n");
            let i = 0
            const timer = setInterval(() => {
                controller.enqueue(`Hello, world! ${i}\n\n`);
                if (i++ > 10) {
                    controller.close();
                    clearInterval(timer);
                }
            }, 1000);
        },
    });

    return new Response(body);
}
export const config = {
    path: "/v2"
};
