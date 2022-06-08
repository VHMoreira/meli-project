export type SearchResult = {
    results: SearchResultItem[]
    filters: SearchResultFilter[]
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
    address: SearchResultItemAddress
}

export type SearchResultItemAddress = {
    state_name: string
}

export type SearchResultFilter = {
    id: string
    values: SearchResultFilterValue[]
}

export type SearchResultFilterValue = {
    path_from_root: Array<{
        name: string
    }>
}