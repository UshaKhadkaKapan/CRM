import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Registration from "./pages/Registeration";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
