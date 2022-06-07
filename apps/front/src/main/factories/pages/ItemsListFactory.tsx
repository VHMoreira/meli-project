import React from 'react'
import { LoadItemsSearchFactory } from '@/main/factories/usecases'
import { ItemsList } from '@/presentation/pages'


export const ItemsListFactory: React.FC = () => {
  return (
    <ItemsList loadItemsSearch={LoadItemsSearchFactory()} />
  )
}