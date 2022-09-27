import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailVerification from "./pages/EmailVerification";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/client-verification" element={<EmailVerification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
