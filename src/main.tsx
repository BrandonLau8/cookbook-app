import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import {FoodProvider} from './context/FoodProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <FoodProvider>
    <App />
    </FoodProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
