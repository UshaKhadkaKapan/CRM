import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import CustomInput from "../../component/custom-input/CustomInput";
import { requestOTP } from "../../helper/axios-helper";
import MainLayout from "../../layout/MainLayout";

const ResetPassword = () => {
  const [showForm, setShowForm] = useState("password");
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({});
  const [error, setError] = useState("kwsjjs");
  const [disableBtn, setDisableBtn] = useState(true);

  const handleOnChange = (e) => {
    let { name, value } = e.target;

    let hasError = "";

    if (name === "password" || name === "confirmPassword") {
      setError("");

      !disableBtn && setDisableBtn(true);
    }
    console.log(name, value);

    setForm({
      ...form,
      [name]: value,
    });

    if (name === "confirmPassword") {
      const { password } = form;

      if (password !== value) {
        hasError = "Password do not match";
      }
      if (password.length < 6) {
        hasError = "Password must not be longer than 6 character";
      }
      if (!/[a-z]/.test(password)) {
        hasError = "Password must contain lowercase";
      }
      if (!/[A-Z]/.test(password)) {
        hasError = "Password must contain lowercase";
        if (!/[0-9]/.test(password)) {
          hasError = "Password must contain lowercase";
        }

        if (!password) {
          hasError = "New password must be provided";
        }
      }

      setError(hasError);
      !hasError && setDisableBtn(false);
    }
  };

  const handleOnOTPRequest = async (e) => {
    e.preventDefault();

    const responsePromise = requestOTP({ email });
    toast.promise(responsePromise, { pending: "Please Wait" });

    const { status, message } = await responsePromise;
    toast[status](message);
    status === "success" && setShowForm("password");
    Alert(email);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
  };

  const otpRequest = [
    {
      label: "Request OTP",
      name: "email",
      type: "email",
      placeholder: "email@gmail.com",
    },
  ];

  const fields = [
    {
      label: " OTP",
      name: "otp",
      placeholder: "123456",
      type: "number",
      required: true,
    },
    {
      label: "New Password",
      name: "password",
      placeholder: "******",
      type: "password",
      required: true,
    },
    {
      label: " Confirm Password",
      name: "confirmPassword",
      placeholder: "*******",
      type: "password",
      required: true,
    },
  ];
  console.log(form);
  return (
    <MainLayout>
      <div className="reg-form d-flex justify-content-center mt-5">
        {showForm === "otp" && (
          <Form onSubmit={handleOnOTPRequest}>
            <h3>Forgot Password</h3>
            <div className="py-3">Request an OTP to reset your Password</div>

            <CustomInput
              {...otpRequest}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
              className="btn btn-outline-primary"
              value="Request OTP"
              type="submit"
            />

            {/* <CustomInput
              type="submit"
              className="bth btn-danger"
              value="update password"
            /> */}

            <div
            //   className="text-right mt-5"
            //   onClick={() => setShowForm("otp")}
            //   style={{ cursor: "pointer" }}
            >
              {" "}
              Request OTP again
            </div>

            {/* <CustomInput type="submit" className="btn btn-outline-primary" /> */}
          </Form>
        )}

        {showForm === "password" && (
          <Form onSubmit={handleOnSubmit}>
            <h3>Reset Password</h3>
            <div className="py-3">Request an OTP to reset your Password</div>

            {fields.map((fields, i) => (
              <CustomInput key={i} {...fields} onChange={handleOnChange} />
            ))}

            <Form.Text muted>
              New Password should contain atLeast one upperCase, lowercase and a
              number and minimum of 6 characters
            </Form.Text>

            <Form.Group className="mt-5">
              <Form.Text variant="text-danger fs-3 fw-bolder">
                {error}
              </Form.Text>
            </Form.Group>

            <CustomInput
              type="submit"
              className="bth btn-danger"
              value="update password"
              disabled={disableBtn}
            />

            <div
              className="text-right"
              onClick={() => setShowForm("otp")}
              style={{ cursor: "pointer" }}
            >
              {" "}
              Request OTP again
            </div>
          </Form>
        )}
      </div>
    </MainLayout>
  );
};

export default ResetPassword;
