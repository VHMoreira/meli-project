import { SearchResultDto } from "@/domain/dtos/SearchResultDto";
import { SearchItems } from "@/domain/usecases";
import { ok, serverError } from "../helpers";
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
                    currency: item.currency_id,
                    decimals: item.price
                },
                title: item.title
            }))

            const categoriesFromAvailableFilters = searchResult.available_filters
                .find(filter => filter.id === 'category')
                ?.values.map(values => values.name)

            const categoriesFromFilters = searchResult.filters
                .find(filter => filter.id === 'category')
                ?.values.map(values => values.name)

            return ok({
                items,
                categories: categoriesFromFilters ?? categoriesFromAvailableFilters ?? []
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