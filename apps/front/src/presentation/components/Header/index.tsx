import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LogoMl, icSearch } from '@/presentation/assets/images'
import Style from './styles.scss'
import { useItem } from "@/presentation/hooks"

type HandleEntryInput = React.ChangeEventHandler<HTMLInputElement>
type HandlePressEnter = React.KeyboardEventHandler<HTMLInputElement>

const Header: React.FC = () => {
    const [query, setQuery] = useState<string | null>()
    const navigate = useNavigate()
    const { resetData } = useItem()

    const handleInputEntry: HandleEntryInput = ({ target }) => {
        const { value } = target
        setQuery(value)
    }

    const handleSubmit = async () => {
        resetData()

        const isId = query.match(/(MLA)\d*$/)

        if (isId) {
            navigate(`/items/${query}`)
            return
        }

        navigate(`items?search=${query}`)
    }

    const handleSubmitOnPressEnter: HandlePressEnter = ({ key }) => {
        if (key === 'Enter') {
            handleSubmit()
        }
    }

    const handleReturnToHome = () => {
        resetData()
        navigate('/')
    }

    return (
        <header className={Style.header}>
            <div className={Style.headerContent}>
                <img src={LogoMl} alt="logo meli" onClick={handleReturnToHome} />
                <div className={Style.searchbox}>
                    <input
                        type="text"
                        placeholder="Nunca dejes de buscar"
                        onChange={handleInputEntry}
                        onKeyDown={handleSubmitOnPressEnter}
                    />
                    <button className={Style.iconButton} onClick={handleSubmit}>
                        <img src={icSearch} alt="icon logo" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header