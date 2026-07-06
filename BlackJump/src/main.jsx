import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import App from './App.jsx'
import './index.css'
=======
import './index.css'
import App from './App.jsx'
>>>>>>> b689ecfa87369306864f4f31ee46466f852ad1c5

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
