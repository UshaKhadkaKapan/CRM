import React, { useState } from "react";
import { Form } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput";

const initialState = {
  status: "inactive",
  name: "",
  description: "",
};
const AddPaymentMethodForm = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const inputFields = [
    {
      label: "Payment method Name",
      name: "name",
      placeholder: "i.e Pay by Credit Card",
      required: true,
      type: "text",
    },
    {
      label: "Description",
      name: "description",
      placeholder: "Write more about the description",
      required: true,
      type: "text",
      as: "textarea",
    },
    {
      type: "submit",
      className: "btn btn-primary",
      value: "Add Payment Method",
    },
  ];
  console.log(form);
  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Check name="status" label="status" type="switch"></Form.Check>
        {inputFields.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}
      </Form>
    </div>
  );
};

export default AddPaymentMethodForm;
