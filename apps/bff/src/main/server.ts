import { setupApp } from "./config/app"
import env from './config/env'

const app = setupApp()

app.listen(env.port, () => {
    console.log(`Server running at http://localhost:${env.port} 🦇`)
})