import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { LogoMl, icSearch } from '@/presentation/assets/images'
import Style from './styles.scss'

type HandleEntryInput = React.ChangeEventHandler<HTMLInputElement>
type HandlePressEnter = React.KeyboardEventHandler<HTMLInputElement>

const Header: React.FC = () => {
    const [query, setQuery] = useState<string | null>()
    const navigate = useNavigate()

    const handleInputEntry: HandleEntryInput = ({ target }) => {
        const { value } = target
        setQuery(value)
    }

    const handleSubmit = async () => {
        navigate(`items?search=${query}`)
    }

    const handleSubmitOnPressEnter: HandlePressEnter = ({ key }) => {
        if (key === 'Enter') {
            handleSubmit()
        }
    }

    return (
        <header className={Style.header}>
            <div className={Style.headerContent}>
                <img src={LogoMl} alt="logo meli" onClick={() => navigate('/')} />
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