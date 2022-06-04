import { SearchResult } from "../models/SearchResult"

export interface SearchItems {
    search(params: SearchItems.Params): Promise<SearchItems.Result>
}

export namespace SearchItems {
    export type Params = {
        query: string
    }

    export type Result = SearchResult
}