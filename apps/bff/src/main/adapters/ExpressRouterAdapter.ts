import { Controller } from "@/presentation/protocols"
import { Request, Response } from "express"

export const RouterAdapter = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const request = {
            ...req.params,
            ...req.query
        }

        const httpResponse = await controller.handle(request)

        return res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}