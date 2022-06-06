import { Item } from '@/domain/models'

export interface LoadItemDetails {
    load: (params: LoadItemDetails.Params) => Promise<LoadItemDetails.Model>
}

export namespace LoadItemDetails {
    export type Params = {
        id: Item['id']
    }

    export type Model = Item
}