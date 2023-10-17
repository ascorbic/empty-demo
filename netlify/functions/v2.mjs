function handler() {
    return  fetch("https://www.netlify.com/favicon.ico")
}

const config = {
    path: "/v2"
}

export {handler as default, config}