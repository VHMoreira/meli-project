import { Item } from "../models"

export interface SearchItems {
    search(params: SearchItems.Params): Promise<SearchItems.Result>
}

export namespace SearchItems {
    export type Params = {
        query: string
    }

    export type Result = {
        results: Item[]
        filters: Array<{
            id: string
            values: Array<{
                name: string
            }>
        }>
        available_filters: Array<{
            id: string
            values: Array<{
                name: string
            }>
        }>
    }
}