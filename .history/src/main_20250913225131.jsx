import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode className="body">
    <header className="header">Book Catalog</header>
    <App />
  </StrictMode>,
)
