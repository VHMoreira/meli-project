import React, { createContext, PropsWithChildren, useCallback, useState } from 'react';
import { Item, SearchResult } from '@/domain/models';
import { LoadItemsSearch } from '@/domain/usecases';

interface ItemContextData {
    item?: Item
    searchResult?: SearchResult
    loadSearchResult(params: LoadItemsSearch.Params): Promise<void>
}

type State = {
    item?: Item | null
    searchResult?: SearchResult | null
}

type Props = {
    loadItemsSearch: LoadItemsSearch
}

export const ItemContext = createContext<ItemContextData>({} as ItemContextData)

export const ItemProvider: React.FC<PropsWithChildren<Props>> = ({ children, loadItemsSearch }) => {
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

    return (
        <ItemContext.Provider value={{ ...data, loadSearchResult }}>
            {children}
        </ItemContext.Provider>
    )
}