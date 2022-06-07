import React, { PropsWithChildren } from "react"
import Header from "@/presentation/components/Header"

const Default: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Default