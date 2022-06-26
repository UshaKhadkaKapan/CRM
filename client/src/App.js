import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login-registration/Login";
import Registeration from "./pages/login-registration/Registeration";
import Emailverification from "./pages/login-registration/Emailverification";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registeration />} />
          <Route path="/admin-verification" element={<Emailverification />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default App;
