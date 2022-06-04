import { setupApp } from "./config/app"

const app = setupApp()

app.listen(process.env.PORT || "8080", () => {
    console.log('server running 🦇')
})