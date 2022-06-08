import React, { useEffect } from "react"
import { useItem } from "@/presentation/hooks"
import { Breadcrumbs } from "@/presentation/components"
import { currencyFormat } from "@/presentation/helpers"
import { useParams } from "react-router-dom"
import Styles from './styles.scss'

const ItemsList: React.FC = () => {
    const { id } = useParams()
    const { item, loadItem } = useItem()

    useEffect(() => {
        loadItem({ id })
    }, [id])

    if (!item) {
        return null
    }

    return (
        <section className={Styles.root}>
            <div className={Styles.wrapper}>
                <Breadcrumbs />
                <section className={Styles.itemDetail}>
                    <img className={Styles.itemPicture} src={item.picture} alt={item.title} />
                    <aside className={Styles.itemInfo}>
                        <p>{item.condition} - {item.price.amount} vendidos</p>
                        <h3>{item.title}</h3>
                        <h1>{currencyFormat(item.price)}</h1>
                        <button>
                            Comprar
                        </button>
                    </aside>
                    <article className={Styles.description}>
                        <h2>Descripción del producto</h2>
                        <p>{item.description}</p>
                    </article>
                </section>
            </div>
        </section>
    )
}

export default ItemsList