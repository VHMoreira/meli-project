import { ItemDto } from "@/domain/dtos";
import { LoadItem, LoadItemDescription } from "@/domain/usecases";
import { ok, serverError } from "../helpers";
import { Controller, HttpResponse } from "../protocols"

export class LoadItemController implements Controller {
    constructor(
        private readonly loadItem: LoadItem,
        private readonly loadItemDescription: LoadItemDescription
    ) { }

    async handle({ id }: LoadItemController.Request): Promise<HttpResponse<ItemDto>> {
        try {
            const [item, itemDescription] = await Promise.all([
                this.loadItem.load({ id }),
                this.loadItemDescription.load({ id })
            ])

            return ok({
                id: item.id,
                title: item.title,
                condition: item.condition,
                description: itemDescription.plain_text,
                free_shipping: item.shipping.free_shipping,
                picture: item.pictures[0].url,
                sold_quantity: item.sold_quantity,
                price: {
                    amount: item.available_quantity,
                    currency: item.currency_id,
                    decimals: item.price
                }
            })
        } catch (error) {
            return serverError(error as Error)
        }
    }

}

export namespace LoadItemController {
    export type Request = {
        id: string
    }
}