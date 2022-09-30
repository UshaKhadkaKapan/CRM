import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailVerification from "./pages/EmailVerification";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Register";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/client-verification" element={<EmailVerification />} />
          <Route path="/password-reset" element={<PasswordReset />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
