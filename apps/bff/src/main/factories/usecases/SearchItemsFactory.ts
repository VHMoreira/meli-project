import { RestSearchItems } from "../../../data/usecases"
import { SearchItems } from "../../../domain/usecases"
import { RestSearchItemsRepository } from "../../../infra/rest"

export const searchItemsFactory = (): SearchItems => {
    const restSearchItemsRepository = new RestSearchItemsRepository()
    return new RestSearchItems(restSearchItemsRepository)
}