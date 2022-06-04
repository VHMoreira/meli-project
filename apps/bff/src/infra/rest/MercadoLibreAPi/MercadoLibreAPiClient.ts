import axios from "axios"

export const MercadoLibreApiClient = axios.create({
    baseURL: 'https://api.mercadolibre.com'
})