import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./GlobalStyle.jsx";
import { BluebirdProvider } from "./context/BluebirdContext.jsx";
import { ComputerProvider } from "./context/ComputerContext.jsx";
import { PrintProvider } from "./context/PrintContext.jsx";
import { TasContext, TasProvider } from "./context/TasContext.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Bluebird } from "./pages/bluebird/Bluebird.jsx";
import { Print } from "./pages/print/Print.jsx";
import { Tas } from "./pages/tas/Tas.jsx";
import { Computer } from "./pages/computer/Computer.jsx";
import { Toner } from "./pages/toners/Toner.jsx";

const router = createBrowserRouter([
  {
    path: "/bluebird",
    element: <Bluebird />,
  },
  {
    path: "/print",
    element: <Print />,
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
    element: <Toner />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <TasProvider>
      <PrintProvider>
        <ComputerProvider>
          <BluebirdProvider>
            <RouterProvider router={router}>
              <App />
            </RouterProvider>
          </BluebirdProvider>
        </ComputerProvider>
      </PrintProvider>
    </TasProvider>
  </React.StrictMode>
);
