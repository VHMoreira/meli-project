import { LoadItemController } from "../../../presentation/controllers"
import { Controller } from "../../../presentation/protocols"
import { loadItemDescriptionFactory, loadItemFactory } from "../usecases"

export const LoadItemControllerFactory = (): Controller => {
    const controller = new LoadItemController(loadItemFactory(), loadItemDescriptionFactory())
    return controller
}