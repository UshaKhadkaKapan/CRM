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
      placeholder: "Write more about the description",
      required: true,
      type: "text",
      as: "textarea",
    },
  ];
  return (
    <div>
      <Form>
        {inputFields.map((item, i) => (
          <CustomInput {...item} />
        ))}
      </Form>
    </div>
  );
};

export default AddPaymentMethodForm;
