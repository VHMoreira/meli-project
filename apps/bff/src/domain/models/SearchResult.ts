export type SearchResult = {
    results: SearchResultItem[]
    filters: SearchResultFilter[]
    available_filters: SearchResultFilter[]
}

export type SearchResultItem = {
    id: string
    title: string
    thumbnail: string
    condition: string
    shipping: {
        free_shipping: boolean
    }
    price: number
    currency_id: string
    available_quantity: number
}

export type SearchResultFilter = {
    id: string
    values: SearchResultFilterValue[]
}

export type SearchResultFilterValue = {
    name: string
}