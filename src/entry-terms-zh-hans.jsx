import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Terms from './pages/zh-Hans/Terms.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Terms />
  </StrictMode>,
)
