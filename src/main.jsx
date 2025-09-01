import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SupabaseProvider } from './context/supabaseProvider.jsx'

createRoot(document.getElementById('root')).render(
  <SupabaseProvider>
    <App/>
  </SupabaseProvider>
)
