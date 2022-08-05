import React, { useEffect } from "react";
import LoginForm from "../../component/LoginForm";
import MainLayout from "../../layout/MainLayout";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.adminUser);

  const origin =
    (location.state && location.state.from && location.state.from.pathname) ||
    "/dashboard";
  useEffect(() => {
    user._id && navigate(origin);
  }, [navigate, user]);
  console.log(user);
  return (
    <MainLayout>
      <div className="reg-form d-flex justify-content-center">
        <LoginForm />
      </div>
    </MainLayout>
  );
};

export default Login;
