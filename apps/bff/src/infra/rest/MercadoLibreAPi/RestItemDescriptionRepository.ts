import { LoadItemDescriptionRepository } from "@/data/protocols"
import { ItemDescription } from "@/domain/models"
import { LoadItemDescription } from "@/domain/usecases"
import { MercadoLibreApiClient } from "./MercadoLibreAPiClient"

export class RestItemDescriptionRepository implements LoadItemDescriptionRepository {
    async load({ id }: LoadItemDescription.Params): Promise<LoadItemDescription.Result> {
        const { data: itemDescriptionData } = await MercadoLibreApiClient.get<ItemDescription>(`/items/${id}/description`)
        return itemDescriptionData
    }
}