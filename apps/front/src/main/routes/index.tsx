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
                        <Route path="/producto/:id" element={<ItemDetailFactory />} />
                        <Route path="/" element={<ItemsListFactory />} />
                    </Routes>
                </DefaultLayoutFactory>
            </ItemProviderFactory>
        </BrowserRouter>
    )
}

export default Router 