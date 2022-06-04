import { LoadItemRepository } from "@/data/protocols"
import { Item } from "@/domain/models"
import { LoadItem } from "@/domain/usecases"
import { MercadoLibreApiClient } from "./MercadoLibreAPiClient"

export class RestItemRepository implements LoadItemRepository {
    async load({ id }: LoadItem.Params): Promise<LoadItem.Result> {
        const { data: itemData } = await MercadoLibreApiClient.get<Item>(`/items/${id}`)
        return itemData
    }
}