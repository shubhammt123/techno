import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CountProvider from './context/CountProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountProvider>
    <App />
    </CountProvider>
  </StrictMode>,
)
