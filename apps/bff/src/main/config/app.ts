import cors from 'cors'
import express, { Express } from 'express'
import setupRoutes from "../routes/ItemRoutes"

export const setupApp = (): Express => {
    const app = express()
    app.use(cors())
    app.use(express.json())
    setupRoutes(app)
    return app
}