import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './GlobalStyle.jsx'
import {  BluebirdProvider } from './context/BluebirdContext.jsx'
import { ComputerProvider } from './context/ComputerContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <GlobalStyle/>
    <ComputerProvider>
    <BluebirdProvider>
        <App />
    </BluebirdProvider>
    </ComputerProvider>
   
  </React.StrictMode>,
)
