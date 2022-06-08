import React from "react"
import Styles from './styles.scss'

const EmptyList: React.FC = () => {
    return (
        <div className={Styles.wrapper}>
            <p>:(</p>
            <p>Lo sentimos, no pudimos encontrar ningún producto.</p>
        </div>
    )
}

export default EmptyList