import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginSignup from './Components/loginSignup/LoginSignup.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginSignup />
  </StrictMode>,
)
