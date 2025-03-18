import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import EsterProfile from './Ester.jsx'
import PetrProfile from './Petr.jsx'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/EsterProfile' element={<EsterProfile />} /> 
        <Route path='/PetrProfile' element={<PetrProfile />} /> 
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
