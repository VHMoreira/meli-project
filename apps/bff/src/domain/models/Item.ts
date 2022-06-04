export type Item = {
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

export type ItemDescription = {
    plain_text: string
}

