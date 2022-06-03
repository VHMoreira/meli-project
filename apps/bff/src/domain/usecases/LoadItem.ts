import { Item } from "../models"
import { ItemDto } from "./dtos"

export interface LoadItem {
    loadItem(params: LoadItem.Params): Promise<LoadItem.Result>
}

export namespace LoadItem {
    export type Params = {
        id: Item['id']
    }

    export type Result = ItemDto
}