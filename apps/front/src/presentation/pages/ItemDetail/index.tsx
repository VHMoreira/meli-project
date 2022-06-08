import React, { useEffect } from "react"
import { useItem } from "@/presentation/hooks"
import { Breadcrumbs } from "@/presentation/components"
import { ItemPrice } from "@/domain/models"
import { useParams } from "react-router-dom"
import Styles from './styles.scss'

const ItemsList: React.FC = () => {
    const { id } = useParams()
    const { item, loadItem } = useItem()

    useEffect(() => {
        loadItem({ id })
    }, [id])

    const valueFormatted = (price: ItemPrice) => {
        const formatter = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: price.currency
        })


        return formatter.format(price.decimals / 100)
    }

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
                        <h1>{valueFormatted(item.price)}</h1>
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