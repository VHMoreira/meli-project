import { ItemDescription } from '@/domain/models'

export interface LoadItemDescriptionRepository {
    load: (data: LoadItemDescriptionRepository.Params) => Promise<LoadItemDescriptionRepository.Result>
}

export namespace LoadItemDescriptionRepository {
    export type Params = {
        id: string
    }
    export type Result = ItemDescription
}