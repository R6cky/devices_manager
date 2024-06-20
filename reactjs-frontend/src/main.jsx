import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './GlobalStyle.jsx'
import {  BluebirdProvider } from './context/BluebirdContex.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <GlobalStyle/>
    <BluebirdProvider>
        <App />
    </BluebirdProvider>
   
  </React.StrictMode>,
)
