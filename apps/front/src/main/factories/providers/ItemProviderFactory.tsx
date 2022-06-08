import React, { PropsWithChildren } from 'react'
import { LoadItemDetailsFactory, LoadItemsSearchFactory } from '@/main/factories/usecases'
import { ItemProvider } from '@/presentation/providers'


export const ItemProviderFactory: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <ItemProvider loadItemsSearch={LoadItemsSearchFactory()} loadItemDetails={LoadItemDetailsFactory()}>
      {children}
    </ItemProvider>
  )
}