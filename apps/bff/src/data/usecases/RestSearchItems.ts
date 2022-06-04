import { SearchItems } from "@/domain/usecases"
import { SearchItemsRepository } from "../protocols/rest/SearchItemsRepository"

export class RestSearchItems implements SearchItems {
    constructor(
        private readonly searchItemsRepository: SearchItemsRepository

    ) { }

    async search({ query }: SearchItems.Params): Promise<SearchItems.Result> {
        const searchResult = await this.searchItemsRepository.search({ query })
        return searchResult
    }
}