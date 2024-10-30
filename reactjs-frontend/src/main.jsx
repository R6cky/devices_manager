import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./GlobalStyle.jsx";
import { BluebirdProvider } from "./context/BluebirdContext.jsx";
import { ComputerProvider } from "./context/ComputerContext.jsx";
import { PrinterProvider } from "./context/PrinterContext.jsx";
import { TasProvider } from "./context/TasContext.jsx";
import { TonerProvider } from "./context/TonerContext.jsx";
import { Userprovider } from "./context/UserContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <TonerProvider>
        <TasProvider>
          <PrinterProvider>
            <ComputerProvider>
              <BluebirdProvider>
                <Userprovider>
                  <App />
                </Userprovider>
              </BluebirdProvider>
            </ComputerProvider>
          </PrinterProvider>
        </TasProvider>
      </TonerProvider>
    </BrowserRouter>
  </React.StrictMode>
);
