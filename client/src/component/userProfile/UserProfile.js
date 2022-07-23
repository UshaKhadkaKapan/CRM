import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateAdminProfileAction } from "../../pages/admin-profile/adminAction";
import CustomInput from "../custom-input/CustomInput";

const initialState = {
  fName: "",
  lName: "",
  phone: "",
  email: "",
  dob: "",
  address: "",
  currentPassword: "",
};
const UserProfile = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const { user } = useSelector((state) => state.adminUser);

  useEffect(() => {
    setForm(user);
  }, []);

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
    const { fName, lName, email, phone, address, currentPassword, dob } = form;
    dispatch(
      updateAdminProfileAction({
        fName,
        lName,
        email,
        phone,
        address,
        currentPassword,
        dob,
      })
    );
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
      label: "Current Password",
      name: "currentPassword",
      placeholder: "******",
      type: "text",
      value: form.currentPassword,
      required: true,
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
