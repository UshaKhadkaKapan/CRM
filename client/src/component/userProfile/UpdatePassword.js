import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput";

const initialState = {
  currentPassword: "",
  password: "",
  confirmPassword: "",
};
export const UpdatePassword = () => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    if (name === "password" || name === "confirmPassword") {
      setError("");
    }
    console.log(name, value);

    setForm({
      ...form,
      [name]: value,
    });

    if (name === "confirmPassword") {
      const { password } = form;

      password !== value && setError("Password do not match");
      password.length < 6 &&
        setError("Password must be longer than 6 character");

      !/[a-z]/.test(password) && setError("Password must contain lowercase");
      !/[A-Z]/.test(password) && setError("Password must contain lowercase");
      !/[0-9]/.test(password) && setError("Password must contain lowercase");

      !password && setError("New password must be provided");
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const inputFields = [
    {
      label: "Current Password",
      name: "currentPassword",
      required: true,
      type: "password",
      value: form.currentPassword,
    },
    {
      label: "Password",
      name: "password",
      required: true,
      type: "password",
      value: form.password,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      type: "password",
      value: form.confirmPassword,
    },
  ];
  return (
    <div className="mt-5">
      <h4>Update your Password</h4>
      <hr />
      <Form onSubmit={handleOnSubmit}>
        {inputFields.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}
        <Form.Text muted>
          New Password should contain atLeast one upperCase, lowercase and a
          number and minimum of 6 characters
        </Form.Text>

        <Form.Group className="mt-5">
          <Form.Text variant="text-danger fs-3 fw-bolder">{error}</Form.Text>
        </Form.Group>
        <Form.Control
          type="submit"
          value="Update Password"
          className="btn btn-danger"
          disabled={disableBtn}
        />
      </Form>
    </div>
  );
};
