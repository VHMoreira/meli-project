import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/producto/:Id" element={<h1>Detalle del producto</h1>} />
                <Route path="/" element={<h1>Busqueda de productos</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router 