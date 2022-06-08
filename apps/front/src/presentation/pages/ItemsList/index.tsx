import React from "react"
import { useItem } from "@/presentation/hooks"
import Styles from './styles.scss'
import { Breadcrumbs, Item } from "@/presentation/components"

const ItemsList: React.FC = () => {
    const { searchResult } = useItem()

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