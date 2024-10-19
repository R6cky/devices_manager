import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./pages/register/Register";
import { Login } from "./pages/login/Login";
import { Bluebird } from "./pages/bluebird/Bluebird";
import { Printer } from "./pages/printer/Printer";
import { Computer } from "./pages/computer/Computer";
import { Tas } from "./pages/tas/Tas";
import { Toner } from "./pages/toners/Toner";
import { ProtectedRoutes } from "./utils/ProtectRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/bluebird" element={<Bluebird />} />
          <Route path="/printer" element={<Printer />} />
          <Route path="/computer" element={<Computer />} />
          <Route path="/tas" element={<Tas />} />
          <Route path="/toner" element={<Toner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
