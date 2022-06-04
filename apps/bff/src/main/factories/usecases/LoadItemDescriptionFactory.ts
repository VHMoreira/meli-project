import { RestLoadItemDescription } from "../../../data/usecases"
import { LoadItemDescription } from "../../../domain/usecases"
import { RestItemDescriptionRepository } from "../../../infra/rest"

export const loadItemDescriptionFactory = (): LoadItemDescription => {
    const restItemDescriptionRepository = new RestItemDescriptionRepository()
    return new RestLoadItemDescription(restItemDescriptionRepository)
}