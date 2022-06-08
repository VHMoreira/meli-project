import React, { useCallback } from "react"
import { ItemPrice } from "@/domain/models"
import { useItem } from "@/presentation/hooks"
import { icShipping } from '@/presentation/assets/images'
import Styles from './styles.scss'
import { useNavigate } from "react-router-dom"

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

    return (
        <section className={Styles.itemsListWrapper}>
            {searchResult ? (
                <ul className={Styles.itemsList}>
                    {searchResult?.items.map((item) => (
                        <li className={Styles.item} key={item.id} onClick={() => handleClickItem(item.id)}>
                            <img className={Styles.itemPicture} src={item.picture} alt={item.title} />
                            <div className={Styles.itemInfo}>
                                <div className={Styles.priceWrapper}>
                                    <p className={Styles.price}>{valueFormatted(item.price)}</p> {item.free_shipping ? <img src={icShipping} alt="free shipping" /> : null}
                                </div>
                                <p className={Styles.title}>{item.title}</p>
                            </div>
                            <div className={Styles.location}>
                                <p>argentina</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : null}
        </section>
    )
}

export default ItemsList