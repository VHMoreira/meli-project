export type Item = {
    id: string
    title: string
    price: ItemPrice
    picture: string
    condition: string
    free_shipping: boolean
    sold_quantity: number
    description: string
}

export type ItemPrice = {
    currency: string
    amount: number
    decimals: number
}