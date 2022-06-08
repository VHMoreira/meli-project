import React, { createContext, PropsWithChildren, useCallback, useState } from 'react';
import { Item, SearchResult } from '@/domain/models';
import { LoadItemDetails, LoadItemsSearch } from '@/domain/usecases';

interface ItemContextData {
    item?: Item
    searchResult?: SearchResult
    loadSearchResult(params: LoadItemsSearch.Params): Promise<void>
    loadItem(params: LoadItemDetails.Params): Promise<void>
}

type State = {
    item?: Item | null
    searchResult?: SearchResult | null
}

type Props = {
    loadItemsSearch: LoadItemsSearch
    loadItemDetails: LoadItemDetails
}

export const ItemContext = createContext<ItemContextData>({} as ItemContextData)

export const ItemProvider: React.FC<PropsWithChildren<Props>> = ({ children, loadItemsSearch, loadItemDetails }) => {
    const [data, setData] = useState<State>({})

    const loadSearchResult = useCallback(async ({ query }: LoadItemsSearch.Params) => {
        const response = await loadItemsSearch.load({
            query
        })

        setData(prev => ({
            ...prev,
            searchResult: response
        }))
    }, [])

    const loadItem = useCallback(async ({ id }: LoadItemDetails.Params) => {
        const response = await loadItemDetails.load({
            id
        })

        setData(prev => ({
            ...prev,
            item: response
        }))
    }, [])

    return (
        <ItemContext.Provider value={{ ...data, loadSearchResult, loadItem }}>
            {children}
        </ItemContext.Provider>
    )
}