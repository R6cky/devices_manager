import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./GlobalStyle.jsx";
import { BluebirdProvider } from "./context/BluebirdContext.jsx";
import { ComputerProvider } from "./context/ComputerContext.jsx";
import { PrinterProvider } from "./context/PrinterContext.jsx";
import { TasProvider } from "./context/TasContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Bluebird } from "./pages/bluebird/Bluebird.jsx";
import { Tas } from "./pages/tas/Tas.jsx";
import { Computer } from "./pages/computer/Computer.jsx";
import { Toner } from "./pages/toners/Toner.jsx";
import { Printer } from "./pages/printer/Printer.jsx";
import { TonerProvider } from "./context/TonerContext.jsx";
import { Register } from "./pages/register/Register.jsx";
import { Login } from "./pages/login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/bluebird",
    element: <Bluebird />,
  },
  {
    path: "/printer",
    element: <Printer />,
  },
  {
    path: "/computer",
    element: <Computer />,
  },
  {
    path: "/tas",
    element: <Tas />,
  },
  {
    path: "/toner",
    element: <Toner />,
  },
  {
    path: "/",
    element: <Bluebird />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <TonerProvider>
      <TasProvider>
        <PrinterProvider>
          <ComputerProvider>
            <BluebirdProvider>
              <RouterProvider router={router}>
                <App />
              </RouterProvider>
            </BluebirdProvider>
          </ComputerProvider>
        </PrinterProvider>
      </TasProvider>
    </TonerProvider>
  </React.StrictMode>
);
