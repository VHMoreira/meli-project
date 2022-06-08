import React, { useEffect } from "react"
import { useItem } from "@/presentation/hooks"
import Styles from './styles.scss'
import { Breadcrumbs, Item } from "@/presentation/components"
import { useSearchParams } from "react-router-dom"

const ItemsList: React.FC = () => {
    const { searchResult, loadSearchResult } = useItem()
    const [searchParams] = useSearchParams()

    useEffect(() => {
        loadSearchResult({
            query: searchParams.get('search')
        })
    }, [searchParams])

    if (!searchResult) {
        return null
    }

    return (
        <section className={Styles.root}>
            <article className={Styles.wrapper}>
                <Breadcrumbs />
                <ul className={Styles.itemsList}>
                    {searchResult?.items.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
                </ul>
            </article>
        </section>
    )
}

export default ItemsList