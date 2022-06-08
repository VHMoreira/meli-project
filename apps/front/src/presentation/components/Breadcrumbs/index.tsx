import React, { useCallback } from "react"
import { useItem } from "@/presentation/hooks"
import Style from './styles.scss'

const Breadcrumbs: React.FC = () => {
    const { searchResult } = useItem()

    const isLastStep = useCallback((index: number) => {
        const categoriesLength = searchResult.categories.length - 1

        if (index === categoriesLength) {
            return true
        }
        return false
    }, [searchResult])

    if (!searchResult) {
        return null
    }

    return (
        <div className={Style.breadcrumbs}>
            {searchResult?.categories.map((category, index) => (
                <p key={category}
                    className={
                        !isLastStep(index)
                            ? `${Style.step}`
                            : `${Style.step} ${Style.lastStep}`
                    }
                >
                    {category}
                    {!isLastStep(index) ? <span className={Style.separator}>{'>'}</span> : null}
                </p>
            ))}
        </div>
    )
}

export default Breadcrumbs