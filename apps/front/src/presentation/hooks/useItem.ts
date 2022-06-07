import { useContext } from "react"
import { ItemContext } from "@/presentation/providers"

export const useItem = () => {
    const context = useContext(ItemContext)
    return context
}