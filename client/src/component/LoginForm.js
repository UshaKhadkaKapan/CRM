import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { loginAction } from "../pages/login-registration/loginRegisterAction";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
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
    </Form>
  );
};

export default LoginForm;
