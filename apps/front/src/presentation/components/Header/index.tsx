import React, { useState } from "react"
import { useItem } from "@/presentation/hooks"
import { useNavigate } from "react-router-dom"
import { LogoMl, icSearch } from '@/presentation/assets/images'
import Style from './styles.scss'

type HandleEntryInput = React.ChangeEventHandler<HTMLInputElement>

const Header: React.FC = () => {
    const [query, setQuery] = useState<string | null>()
    const navigate = useNavigate()
    const { loadSearchResult } = useItem()

    const handleInputEntry: HandleEntryInput = ({ target }) => {
        const { value } = target
        setQuery(value)
    }

    const handleSubmit = async () => {
        await loadSearchResult({
            query
        })
        navigate('/')
    }
    return (
        <header className={Style.header}>
            <div className={Style.headerContent}>
                <img src={LogoMl} alt="logo meli" />
                <div className={Style.searchbox}>
                    <input type="text" placeholder="Nunca dejes de buscar" onChange={handleInputEntry} />
                    <button className={Style.iconButton} onClick={handleSubmit}>
                        <img src={icSearch} alt="icon logo" />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header