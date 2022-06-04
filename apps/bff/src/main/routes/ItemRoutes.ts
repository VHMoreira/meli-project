import { Router } from "express";
import { RouterAdapter } from "../adapters";
import { LoadItemControllerFactory } from "../factories/controllers/LoadItemControllerFactory";

export default (router: Router) => {
    router.get('/api/items/:id', RouterAdapter(LoadItemControllerFactory()))
}