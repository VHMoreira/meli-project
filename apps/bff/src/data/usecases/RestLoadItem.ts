import { LoadItem } from "@/domain/usecases"
import { LoadItemRepository } from "../protocols"
import { LoadItemDescriptionRepository } from "../protocols/rest/LoadItemDescriptionRepository"

export class RestLoadItem implements LoadItem {
    constructor(
        private readonly loadItemRepository: LoadItemRepository,
    ) { }

    async load({ id }: LoadItem.Params): Promise<LoadItem.Result> {
        const item = await this.loadItemRepository.load({ id })
        return item
    }
}