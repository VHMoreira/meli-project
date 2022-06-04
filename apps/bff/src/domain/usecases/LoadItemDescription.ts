import { Item, ItemDescription } from "../models"

export interface LoadItemDescription {
    load(params: LoadItemDescription.Params): Promise<LoadItemDescription.Result>
}

export namespace LoadItemDescription {
    export type Params = {
        id: Item['id']
    }

    export type Result = ItemDescription
}