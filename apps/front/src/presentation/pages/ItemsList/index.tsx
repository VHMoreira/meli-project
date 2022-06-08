import React, { useCallback } from "react"
import { ItemPrice } from "@/domain/models"
import { useItem } from "@/presentation/hooks"
import { icShipping } from '@/presentation/assets/images'
import Styles from './styles.scss'
import { useNavigate } from "react-router-dom"
import Item from "@/presentation/components/Item"

const ItemsList: React.FC = () => {
    const { searchResult } = useItem()
    const navigate = useNavigate()
    const valueFormatted = (price: ItemPrice) => {
        const formatter = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: price.currency
        })


        return formatter.format(price.decimals / 100)
    }

    const handleClickItem = useCallback((id: string) => {
        navigate(`producto/${id}`)
    }, [])

    if (!searchResult) {
        return null
    }

    return (
        <section className={Styles.itemsListWrapper}>
            <ul className={Styles.itemsList}>
                {searchResult?.items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </section>
    )
}

export default ItemsList