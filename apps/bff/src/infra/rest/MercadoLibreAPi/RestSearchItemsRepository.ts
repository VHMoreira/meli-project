import { SearchItemsRepository } from "@/data/protocols"
import { SearchItems } from "@/domain/usecases"
import { MercadoLibreApiClient } from "./MercadoLibreAPiClient"

export class RestSearchItemsRepository implements SearchItemsRepository {
    async search({ query }: SearchItems.Params): Promise<SearchItemsRepository.Result> {
        const { data: searchResultData } = await MercadoLibreApiClient.get<SearchItemsRepository.Result>(`sites/MLA/search?q=${query}`)
        return searchResultData
    }
}