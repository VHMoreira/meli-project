import { LoadItemDescription } from "@/domain/usecases"
import { LoadItemDescriptionRepository } from "../protocols/rest/LoadItemDescriptionRepository"

export class RestLoadItemDescription implements LoadItemDescription {
    constructor(
        private readonly loadItemDescriptionRepository: LoadItemDescriptionRepository

    ) { }

    async load({ id }: LoadItemDescription.Params): Promise<LoadItemDescription.Result> {
        const itemDescription = await this.loadItemDescriptionRepository.load({ id })
        return itemDescription
    }
}