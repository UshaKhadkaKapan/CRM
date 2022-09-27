import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Input, Form } from "antd";
import { toast } from "react-toastify";
import { postClientDetails } from "../helper/axios-helper";

const Register = () => {
  const onFinish = async (value) => {
    const { confirmPassword, ...rest } = value;

    const { status, message } = await postClientDetails(rest);
    toast[status](message);
  };
  return (
    <div className="login">
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={24} className="text-left p-5 ">
          <Form
            layout="vertical"
            className="login-form p-5"
            onFinish={onFinish}
          >
            <h1>Register</h1>
            <hr />
            <Form.Item
              name="fName"
              label="fName"
              type="text"
              required

              // onChange={handleOnChange}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="lName"
              label="lName"
              type="text"
              required
              // onChange={handleOnChange}
            >
              <Input />
            </Form.Item>
            <Form.Item
              type="email"
              name="email"
              label="Email"
              required
              // onChange={handleOnChange}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone"
              type="text"
              required
              // onChange={handleOnChange}
            >
              <Input />
            </Form.Item>
            <Form.Item
              type="date"
              name="dob"
              label="DOB"

              // onChange={handleOnChange}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="address"
              label="Address"
              type="text"
              required
              // onChange={handleOnChange}
            >
              <Input />
            </Form.Item>
            <Form.Item
              type="password"
              name="password"
              label="Password"
              required
              // onChange={handleOnChange}
            >
              <Input />
            </Form.Item>
            <Form.Item
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              required
              // onChange={handleOnChange}
            >
              <Input />
            </Form.Item>

            <button className="btn1 mt-2 mb-3" type="submit">
              Register
            </button>
            <br />
            <Link to="/login">Click here to login</Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
