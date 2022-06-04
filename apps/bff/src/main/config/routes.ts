import { Express, Router } from "express"
import ItemRoutes from "../routes/ItemRoutes"

export default (app: Express) => {
    const router = Router()
    ItemRoutes(router)
    app.use('/api', router)
}