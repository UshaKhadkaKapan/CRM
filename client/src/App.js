import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login-registration/Login";
import Registeration from "./pages/login-registration/Registeration";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registeration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
