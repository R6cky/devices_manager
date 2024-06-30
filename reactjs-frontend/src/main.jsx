import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './GlobalStyle.jsx'
import {  BluebirdProvider } from './context/BluebirdContext.jsx'
import { ComputerProvider } from './context/ComputerContext.jsx'
import { PrintProvider } from './context/PrintContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <GlobalStyle/>
    <PrintProvider>
    <ComputerProvider>
    <BluebirdProvider>
        <App />
    </BluebirdProvider>
    </ComputerProvider>
    </PrintProvider>
   
  </React.StrictMode>,
)
