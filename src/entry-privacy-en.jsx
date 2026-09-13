import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Privacy from './pages/en/Privacy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Privacy />
  </StrictMode>,
)
