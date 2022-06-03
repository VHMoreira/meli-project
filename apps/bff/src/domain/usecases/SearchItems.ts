import { SearchResultDto } from "./dtos/SearchResultDto"

export interface SearchItems {
    searchItems(params: SearchItems.Params): Promise<SearchItems.Result>
}

export namespace SearchItems {
    export type Params = {
        query: string
    }

    export type Result = SearchResultDto
}