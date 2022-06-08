import React, { useEffect } from "react"
import { useItem } from "@/presentation/hooks"
import { Breadcrumbs } from "@/presentation/components"
import { useParams } from "react-router-dom"
import Styles from './styles.scss'

const ItemsList: React.FC = () => {
    const { id } = useParams()
    const { item, loadItem } = useItem()

    useEffect(() => {
        loadItem({ id })
    }, [id])

    return (
        <section className={Styles.root}>
            <article className={Styles.wrapper}>
                <Breadcrumbs />
                <section className={Styles.itemDetail}>
                    {item?.title}
                </section>
            </article>
        </section>
    )
}

export default ItemsList