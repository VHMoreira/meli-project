import { Router } from "express";
import { RouterAdapter } from "../adapters";
import { SearchItemsControllerFactory, LoadItemControllerFactory } from "../factories/controllers";

export default (router: Router) => {
    router.get('/api/items/:id', RouterAdapter(LoadItemControllerFactory()))
    router.get('/api/items', RouterAdapter(SearchItemsControllerFactory()))
}