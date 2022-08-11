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
import ResetPassword from "./pages/resetPassword/ResetPassword";
import PrivateRouter from "./component/private-route/PrivateRouter";
import NewProductPage from "./pages/products/newProductPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registeration />} />
          <Route path="/admin-verification" element={<Emailverification />} />
          <Route path="/password-reset" element={<ResetPassword />} />

          {/* private routes TODO */}
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <DashBoard />
              </PrivateRouter>
            }
          />
          <Route
            path="/categories"
            element={
              <PrivateRouter>
                <Categories />
              </PrivateRouter>
            }
          />
          <Route
            path="/product/new"
            element={
              <PrivateRouter>
                <NewProductPage />
              </PrivateRouter>
            }
          />

          <Route
            path="/products"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          />

          <Route
            path="/product/edit/:_id"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          />

          <Route
            path="/paymentmethod"
            element={
              <PrivateRouter>
                <PaymentMethod />
              </PrivateRouter>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRouter>
                <User />
              </PrivateRouter>
            }
          />
          <Route
            path="/orders"
            element={
              <PrivateRouter>
                <Orders />
              </PrivateRouter>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRouter>
                <Settings />
              </PrivateRouter>
            }
          />
          <Route
            path="/adminprofile"
            element={
              <PrivateRouter>
                <AdminProfile />
              </PrivateRouter>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="dark" />
    </div>
  );
};

export default App;
