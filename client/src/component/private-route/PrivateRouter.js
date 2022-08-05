import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRouter = ({ children, ...rest }) => {
  const location = useLocation();
  const { user } = useSelector((state) => state.adminUser);
  return user._id ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default PrivateRouter;
