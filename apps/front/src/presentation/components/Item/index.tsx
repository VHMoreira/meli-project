import React, { useCallback } from "react"
import { SearchResultItem } from "@/domain/models"
import { icShipping } from '@/presentation/assets/images'
import Styles from './styles.scss'
import { useNavigate } from "react-router-dom"
import { currencyFormat } from "@/presentation/helpers"

type Props = {
    item: SearchResultItem
}

const Item: React.FC<Props> = ({ item }) => {
    const navigate = useNavigate()

    const handleClickItem = useCallback((id: string) => {
        navigate(`/items/${id}`)
    }, [])

    return (
        <li className={Styles.item} onClick={() => handleClickItem(item.id)}>
            <img className={Styles.itemPicture} src={item.picture} alt={item.title} />
            <div className={Styles.itemInfo}>
                <div className={Styles.priceWrapper}>
                    <p className={Styles.price}>{currencyFormat(item.price)}</p> {item.free_shipping ? <img src={icShipping} alt="free shipping" /> : null}
                </div>
                <p className={Styles.title}>{item.title}</p>
            </div>
            <div className={Styles.location}>
                <p>{item.state}</p>
            </div>
        </li>
    )
}

export default Item