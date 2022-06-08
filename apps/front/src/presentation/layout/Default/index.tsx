import React, { PropsWithChildren } from "react"
import { Header } from "@/presentation/components"

const Default: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Default