import React, { useState } from "react";
import { Form } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput";

const initialState = {
  fName: "",
  lName: "",
  phone: "",
  email: "",
  dob: "",
  address: "",
};
const UserProfile = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    console.log(name, value);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const inputFields = [
    {
      label: "First Name",
      name: "fName",
      placeholder: " Usha ",
      required: true,
      type: "text",
      value: form.fName,
    },
    {
      label: "Last Name",
      name: "lName",
      placeholder: "  Khadka",
      required: true,
      type: "text",
      value: form.lName,
    },
    {
      label: "Phone",
      name: "phone",
      placeholder: " 0404040404",
      required: true,
      type: "number",
      value: form.phone,
    },
    {
      label: "Email",
      name: "email",
      placeholder: " khadkausha@gmail.com",
      required: true,
      type: "text",
      value: form.email,
    },
    {
      label: "DOB",
      name: "dob",
      placeholder: " 24/09/1999",
      required: true,
      type: "date",
      value: form.dob,
    },
    {
      label: "Address",
      name: "address",
      placeholder: " Burwood",
      required: true,
      type: "text",
      value: form.address,
    },
    {
      label: "DOB",
      name: "dob",
      type: "date",
      value: form.dob,
    },
    {
      label: "Address",
      name: "address",
      placeholder: "3 Sydney",
      type: "text",
      value: form.address,
    },
    {
      className: "btn btn-warning",
      type: "submit",
      value: "Update Profile",
    },
  ];
  return (
    <div>
      <h4>Update your profile</h4>
      <Form onSubmit={handleOnSubmit}>
        {inputFields.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}
      </Form>
    </div>
  );
};

export default UserProfile;
