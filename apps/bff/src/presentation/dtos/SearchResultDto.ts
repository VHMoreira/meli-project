import { ItemDto } from "./ItemDto"

export type SearchResultDto = {
    author: {
        name: string
        lastname: string
    }
    categories: string[]
    items: Omit<ItemDto, 'description'>
}