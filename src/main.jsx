import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1. IMPORTAMOS BROWSER ROUTER
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. ENVOLVEMOS LA APP CON EL ROUTER */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)