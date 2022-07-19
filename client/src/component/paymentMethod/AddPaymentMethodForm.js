import React from "react";
import { Form } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput";

const AddPaymentMethodForm = () => {
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
      placeholder: "Pay by Credit Card",
      required: true,
      type: "text",
      as: "textarea",
    },
  ];
  return (
    <div>
      <Form>
        <CustomInput />
      </Form>
    </div>
  );
};

export default AddPaymentMethodForm;
