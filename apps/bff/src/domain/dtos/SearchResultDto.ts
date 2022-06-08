export type SearchResultDto = {
    categories: string[]
    items: SearchResultItemDto[]
}

export type SearchResultItemDto = {
    id: string
    title: string
    price: SearchResultItemPriceDto
    picture: string
    condition: string
    free_shipping: boolean
    state: string
}

export type SearchResultItemPriceDto = {
    currency: string
    amount: number
    decimals: number
}