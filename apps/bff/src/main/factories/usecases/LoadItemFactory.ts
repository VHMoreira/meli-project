import { RestLoadItem } from "../../../data/usecases"
import { LoadItem } from "../../../domain/usecases"
import { RestItemRepository } from "../../../infra/rest"

export const loadItemFactory = (): LoadItem => {
    const restItemRepository = new RestItemRepository()
    return new RestLoadItem(restItemRepository)
}