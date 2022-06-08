import { ItemPrice, SearchResultItemPrice } from "@/domain/models"

export const currencyFormat = (price: ItemPrice | SearchResultItemPrice) => {
    const formatter = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: price.currency
    })


    return formatter.format(price.decimals / 100)
}