import { SearchItems } from '../../../domain/usecases'

export interface SearchItemsRepository {
    search(data: SearchItemsRepository.Params): Promise<SearchItemsRepository.Result>
}

export namespace SearchItemsRepository {
    export type Params = SearchItems.Params
    export type Result = SearchItems.Result
}