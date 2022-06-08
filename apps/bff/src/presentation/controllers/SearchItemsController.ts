import { SearchResultDto } from "@/domain/dtos";
import { SearchItems } from "@/domain/usecases";
import { ok, serverError } from "../helpers";
import { currencyFormatter } from "../helpers/CurrencyFormatter";
import { Controller, HttpResponse } from "../protocols"

export class SearchItemsController implements Controller {
    constructor(
        private readonly searchItems: SearchItems
    ) { }

    async handle({ q: query }: SearchItemsController.Request): Promise<HttpResponse<SearchResultDto>> {
        try {
            const searchResult = await this.searchItems.search({ query })

            const items = searchResult.results.map((item) => ({
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                id: item.id,
                picture: item.thumbnail,
                price: {
                    amount: item.available_quantity,
                    currency: currencyFormatter(item.currency_id),
                    decimals: item.price
                },
                title: item.title,
                state: item.address.state_name
            }))

            const categoryFilter = searchResult.filters.find(filter => filter.id === 'category')
            const categoryPath = categoryFilter?.values[0]

            const categoriesNames = categoryPath?.path_from_root.map(category => category.name)

            return ok({
                items,
                categories: categoriesNames ?? []
            })
        } catch (error) {
            return serverError(error as Error)
        }
    }
}

export namespace SearchItemsController {
    export type Request = {
        q: string
    }
}