import React, { PropsWithChildren } from 'react'
import { LoadItemsSearchFactory } from '@/main/factories/usecases'
import { ItemProvider } from '@/presentation/providers'


export const ItemProviderFactory: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <ItemProvider loadItemsSearch={LoadItemsSearchFactory()}>
      {children}
    </ItemProvider>
  )
}