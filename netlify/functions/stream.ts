import { stream } from "@netlify/functions";
export const handler = stream(async () => {
    const body = new ReadableStream({

        start(controller) {
            controller.enqueue("Wait...\n\n");
            let i = 0
            const timer = setInterval(() => {
                controller.enqueue(`Hello, world! ${i++}\n\n`);
                if (i > 10) {
                    controller.close();
                    clearInterval(timer);
                }
            }, 1000);
        },
    });
    return {
        headers: {
            "content-type": "text/plain",
        },
        statusCode: 200,
        body,
    };
});