export type Item = {
    id: string
    title: string
    thumbnail: string
    condition: string
    free_shipping: boolean
    shipping: {
        free_shipping: boolean
    }
    sold_quality: number
    price: number
    currency_id: string
    available_quantity: number
}

export type ItemDescription = {
    plain_text: string
}

