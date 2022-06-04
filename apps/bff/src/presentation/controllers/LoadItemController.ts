import { ItemDto } from "@/domain/dtos";
import { LoadItem, LoadItemDescription } from "@/domain/usecases";
import { Controller, HttpResponse } from "../protocols"

export class LoadItemController implements Controller {
    constructor(
        private readonly loadItem: LoadItem,
        private readonly loadItemDescription: LoadItemDescription
    ) { }

    async handle({ id }: LoadItemController.Request): Promise<HttpResponse<ItemDto>> {
        const [item, itemDescription] = await Promise.all([
            this.loadItem.load({ id }),
            this.loadItemDescription.load({ id })
        ])

        return {
            statusCode: 200,
            body: {
                id: item.id,
                title: item.title,
                condition: item.condition,
                description: itemDescription.plain_text,
                free_shipping: item.shipping.free_shipping,
                picture: item.thumbnail,
                sold_quantity: item.available_quantity,
                price: {
                    amount: item.available_quantity,
                    currency: item.currency_id,
                    decimals: item.price
                }
            }
        }
    }

}

export namespace LoadItemController {
    export type Request = {
        id: string
    }
}