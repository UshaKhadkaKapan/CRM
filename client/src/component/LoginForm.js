import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { loginAction } from "../pages/login-registration/loginRegisterAction";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const LoginForm = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const { user } = useSelector((state) => state.adminUser);

  const origin =
    (location.state && location.state.from && location.state.from.pathname) ||
    "/dashboard";

  useEffect(() => {
    user._id && navigate(origin);
  }, [navigate, user]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginAction(form));
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3 " controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleOnChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
      <div className="text-right">
        Forget Password <a href="/password-reset">Reset Password</a>
      </div>
    </Form>
  );
};

export default LoginForm;
