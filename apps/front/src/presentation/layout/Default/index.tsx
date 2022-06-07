import React, { PropsWithChildren, useEffect } from "react"
import { LoadItemsSearch } from "@/domain/usecases/LoadItemsSearch"

type Props = {
    loadItemsSearch: LoadItemsSearch
}

const Default: React.FC<PropsWithChildren<Props>> = ({ loadItemsSearch, children }) => {
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
        <>
            {children}
        </>
    )
}

export default Default