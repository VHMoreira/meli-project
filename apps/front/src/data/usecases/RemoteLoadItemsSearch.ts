import { SearchResult } from "@/domain/models";
import { LoadItemsSearch } from "@/domain/usecases"
import { HttpClient, HttpStatusCode } from "../protocols/http/HttpClient";

export class RemoteLoadItemsSearch implements LoadItemsSearch {
    constructor(
        private readonly url: string,
        private readonly httpClient: HttpClient<RemoteLoadItemsSearch.Model>
    ) { }

    async load({ query }: LoadItemsSearch.Params): Promise<SearchResult> {
        const response = await this.httpClient.request({
            url: `${this.url}/?q=${query}`,
            method: 'get'
        })

        const searchResult = response.body

        if (response.statusCode === HttpStatusCode.serverError) {
            throw new Error('Unexpected Server Error')
        }

        return searchResult
    }
}

export namespace RemoteLoadItemsSearch {
    export type Model = SearchResult
}