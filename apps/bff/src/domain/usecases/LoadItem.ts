import { Item } from "../models"

export interface LoadItem {
    load(params: LoadItem.Params): Promise<LoadItem.Result>
}

export namespace LoadItem {
    export type Params = {
        id: Item['id']
    }

    export type Result = Item
}