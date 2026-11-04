import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Arabic fonts
import '@fontsource/amiri/400.css'
import '@fontsource/amiri/700.css'
import '@fontsource/ibm-plex-sans-arabic/400.css'
import '@fontsource/ibm-plex-sans-arabic/500.css'
// English fonts
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/500-italic.css'
import '@fontsource/jost/400.css'
import '@fontsource/jost/500.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
