import React from 'react'
import { createRoot } from 'react-dom/client'
import '@/presentation/styles/global.scss'
import Router from './routes'

const rootContainer = document.getElementById('root')
const root = createRoot(rootContainer)
root.render(<Router />)