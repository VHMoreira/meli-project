import React from 'react'
import { createRoot } from 'react-dom/client'

const rootContainer = document.getElementById('root')
const root = createRoot(rootContainer)
root.render(<h1>Hello World!</h1>)