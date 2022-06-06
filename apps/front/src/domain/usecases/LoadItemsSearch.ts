import { SearchResult } from '@/domain/models'

export interface LoadItemsSearch {
    load: (params: LoadItemsSearch.Params) => Promise<LoadItemsSearch.Model>
}

export namespace LoadItemsSearch {
    export type Params = {
        query: string
    }

    export type Model = SearchResult
}