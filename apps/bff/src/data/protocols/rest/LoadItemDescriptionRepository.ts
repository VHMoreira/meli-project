import { LoadItemDescription } from '@/domain/usecases'

export interface LoadItemDescriptionRepository {
    load: (data: LoadItemDescriptionRepository.Params) => Promise<LoadItemDescriptionRepository.Result>
}

export namespace LoadItemDescriptionRepository {
    export type Params = LoadItemDescription.Params
    export type Result = LoadItemDescription.Result
}