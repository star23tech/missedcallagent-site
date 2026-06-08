import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import HvacPage from './pages/HvacPage.tsx'
import PlumbingPage from './pages/PlumbingPage.tsx'
import ElectricalPage from './pages/ElectricalPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hvac-missed-call-solution" element={<HvacPage />} />
        <Route path="/plumbing-missed-call-solution" element={<PlumbingPage />} />
        <Route path="/electrical-missed-call-solution" element={<ElectricalPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
