import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayoutFactory } from '../factories/layouts'
import { ItemsListFactory } from '../factories/pages'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <DefaultLayoutFactory>
                <Routes>
                    <Route path="/producto/:Id" element={<h1>Detalle del producto</h1>} />
                    <Route path="/" element={<ItemsListFactory />} />
                </Routes>
            </DefaultLayoutFactory>
        </BrowserRouter>
    )
}

export default Router 