import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login-registration/Login";
import Registeration from "./pages/login-registration/Registeration";
import Emailverification from "./pages/login-registration/Emailverification";
import DashBoard from "./pages/dashboard/DashBoard";
import Categories from "./pages/Categories/Categories";
import Product from "./pages/products/Products";
import PaymentMethod from "./pages/paymentMethod/PaymentMethod";
import User from "./pages/users/User";
import Orders from "./pages/orders/Orders";
import Settings from "./pages/settings/Settings";
import AdminProfile from "./pages/admin-profile/AdminProfile";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registeration />} />
          <Route path="/admin-verification" element={<Emailverification />} />

          {/* private routes TODO */}
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Product />} />
          <Route path="/paymentmethod" element={<PaymentMethod />} />
          <Route path="/users" element={<User />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/adminprofile" element={<AdminProfile />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default App;
