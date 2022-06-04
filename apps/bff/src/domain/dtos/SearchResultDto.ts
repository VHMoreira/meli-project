import { ItemDto } from "./ItemDto"

export type SearchResultDto = {
    categories: string[]
    items: Omit<ItemDto, 'description' | 'sold_quantity' | 'description'>[]
}