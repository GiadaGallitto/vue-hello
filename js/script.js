const { createApp } = Vue

createApp({
    data() {
        return {
            message: ``,
            imageSrc: `https://miro.medium.com/max/720/0*F-rMIkdywVWyB5a6.webp`
        }
    }
}).mount(`#app`)