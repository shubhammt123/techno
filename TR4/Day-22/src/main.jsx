import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CountProvider from './Context/CountProvider.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <CountProvider>
    <App />
    </CountProvider>
    
  </StrictMode>,
)
