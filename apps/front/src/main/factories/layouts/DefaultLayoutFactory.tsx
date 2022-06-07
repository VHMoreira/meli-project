import React, { PropsWithChildren } from 'react'
import { DefaultLayout } from '@/presentation/layout'


export const DefaultLayoutFactory: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  )
}