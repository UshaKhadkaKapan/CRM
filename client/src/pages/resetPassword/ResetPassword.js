import React, { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import CustomInput from "../../component/custom-input/CustomInput";
import { requestOTP } from "../../helper/axios-helper";
import MainLayout from "../../layout/MainLayout";

const ResetPassword = () => {
  const [showForm, setShowForm] = useState("otp");
  const [email, setEmail] = useState("");

  const handleOnOTPRequest = async (e) => {
    e.preventDefault();

    const responsePromise = requestOTP({ email });
    toast.promise(responsePromise, { pending: "Please Wait" });

    const { status, message } = await responsePromise;
    toast[status](message);
    status === "success" && setShowForm("password");
    Alert(email);
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
              className="text-right"
              onClick={() => setShowForm("otp")}
              style={{ cursor: "pointer" }}
            >
              {" "}
              Request OTP again
            </div>

            {/* <CustomInput type="submit" className="btn btn-outline-primary" /> */}
          </Form>
        )}

        {showForm === "password" && (
          <Form>
            <h3>Forgot Password</h3>
            <div className="py-3">Request an OTP to reset your Password</div>

            {fields.map((fields, i) => (
              <CustomInput key={i} {...fields} />
            ))}

            <CustomInput
              type="submit"
              className="bth btn-danger"
              value="update password"
            />

            <div className="text-right"> Request OTP again</div>

            {/* <CustomInput type="submit" className="btn btn-outline-primary" /> */}
          </Form>
        )}
      </div>
    </MainLayout>
  );
};

export default ResetPassword;
