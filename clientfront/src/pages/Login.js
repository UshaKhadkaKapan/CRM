import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Form } from "antd";

const Register = () => {
  return (
    <div className="login">
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={24} className="text-left p-5 ">
          <Form layout="vertical" className="login-form p-5">
            <h1>Register</h1>
            <hr />

            <Form.Item type="email" name="email" label="Email" required>
              <Input />
            </Form.Item>

            <Form.Item
              type="password"
              name="password"
              label="Password"
              required
            >
              <Input />
            </Form.Item>

            <button className="btn1 mt-2 mb-3">Login</button>
            <br />
            <Link to="/register">Click here to Register</Link>
            <br />
            <div className="text-right mt-3">
              <h5 style={{ color: "white" }}>
                {" "}
                Forget Password 😢: <a href="/password-reset">Reset Password</a>
              </h5>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
