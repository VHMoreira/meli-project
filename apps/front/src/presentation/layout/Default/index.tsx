import React, { PropsWithChildren, useEffect } from "react"
import { useItem } from "@/presentation/hooks"

const Default: React.FC<PropsWithChildren> = ({ children }) => {
    const { item, searchResult, loadSearchResult } = useItem()

    useEffect(() => {
        const load = async () => {
            const response = await loadSearchResult({
                query: 'nintendo'
            })
            return response
        }
        load()
    }, [])

    return (
        <>
            {searchResult?.categories[0]}
            {children}
        </>
    )
}

export default Default