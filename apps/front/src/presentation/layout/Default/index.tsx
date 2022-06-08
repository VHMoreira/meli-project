import React, { PropsWithChildren } from "react"
import { Header } from "@/presentation/components"
import Style from './styles.scss'

const Default: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <div className={Style.content}>
                {children}
            </div>
        </>
    )
}

export default Default