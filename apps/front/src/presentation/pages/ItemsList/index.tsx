import { LoadItemsSearch } from "@/domain/usecases/LoadItemsSearch"
import React, { useEffect } from "react"

type Props = {
    loadItemsSearch: LoadItemsSearch
}

const ItemsList: React.FC<Props> = ({ loadItemsSearch }) => {
    useEffect(() => {
        const load = async () => {
            const response = await loadItemsSearch.load({
                query: 'nintendo'
            })
            console.log(response)
            return response
        }
        load()
    }, [])
    return (
        <h1>Busqueda de productos</h1>
    )
}

export default ItemsList