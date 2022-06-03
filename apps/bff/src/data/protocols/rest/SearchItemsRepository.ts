import { Item } from '@/domain/models'
import { SearchItems } from '@/domain/usecases'

export interface SearchItemsRepository {
    search: (data: SearchItemsRepository.Params) => Promise<SearchItemsRepository.Result>
}

export namespace SearchItemsRepository {
    export type Params = SearchItems.Params
    export type Result = {
        results: Item[]
        available_filters: Array<{
            id: string
            values: Array<{
                name: string
            }>
        }>
    }
}