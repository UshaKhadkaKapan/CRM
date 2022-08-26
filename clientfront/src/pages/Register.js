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
            <Form.Item name="fName" label="fName" type="text" required>
              <Input />
            </Form.Item>
            <Form.Item name="lName" label="lName" type="text" required>
              <Input />
            </Form.Item>
            <Form.Item type="email" name="email" label="Email" required>
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Phone" type="text" required>
              <Input />
            </Form.Item>
            <Form.Item type="date" name="dob" label="DOB" required>
              <Input />
            </Form.Item>
            <Form.Item name="address" label="Address" type="text" required>
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
            <Form.Item
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              required
            >
              <Input />
            </Form.Item>

            <button className="btn1 mt-2 mb-3">Register</button>
            <br />
            <Link to="/login">Click here to login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
