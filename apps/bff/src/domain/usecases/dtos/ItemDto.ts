export type ItemDto = {
    id: string
    title: string
    price: ItemPriceDto
    picture: string
    condition: string
    free_shipping: boolean
    sold_quality: number
    description: string
}

export type ItemPriceDto = {
    currency: string
    amount: number
    decimals: number
}