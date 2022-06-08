import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayoutFactory } from '../factories/layouts'
import { ItemDetailFactory, ItemsListFactory } from '../factories/pages'
import { ItemProviderFactory } from '../factories/providers'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <ItemProviderFactory>
                <DefaultLayoutFactory>
                    <Routes>
                        <Route path="/" element={null} />
                        <Route path="/items" element={<ItemsListFactory />} />
                        <Route path="/items/:id" element={<ItemDetailFactory />} />
                    </Routes>
                </DefaultLayoutFactory>
            </ItemProviderFactory>
        </BrowserRouter>
    )
}

export default Router 