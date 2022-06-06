export type SearchResult = {
    categories: string[]
    items: SearchResultItem[]
}

export type SearchResultItem = {
    id: string
    title: string
    price: SearchResultItemPrice
    picture: string
    condition: string
    free_shipping: boolean
}

export type SearchResultItemPrice = {
    currency: string
    amount: number
    decimals: number
}