import React, { PropsWithChildren } from 'react'
import { LoadItemsSearchFactory } from '@/main/factories/usecases'
import { DefaultLayout } from '@/presentation/layout'


export const DefaultLayoutFactory: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <DefaultLayout loadItemsSearch={LoadItemsSearchFactory()}>
      {children}
    </DefaultLayout>
  )
}