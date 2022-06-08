import React from "react"
import Styles from './styles.scss'

const Loader: React.FC = () => {
    return (
        <div className={Styles.spinnerWrapper}>
            <div className={Styles.spinner}></div>
        </div>
    )
}

export default Loader