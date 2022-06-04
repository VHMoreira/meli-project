import { SearchItemsController } from "../../../presentation/controllers"
import { Controller } from "../../../presentation/protocols"
import { searchItemsFactory } from "../usecases"

export const SearchItemsControllerFactory = (): Controller => {
    const controller = new SearchItemsController(searchItemsFactory())
    return controller
}