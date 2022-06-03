import { Item } from '@/domain/models'
import { LoadItem } from '@/domain/usecases'

export interface LoadItemRepository {
    load: (data: LoadItemRepository.Params) => Promise<LoadItemRepository.Result>
}

export namespace LoadItemRepository {
    export type Params = LoadItem.Params
    export type Result = Item
}