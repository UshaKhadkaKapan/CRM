import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updatePaymentMethodAction } from "../../pages/paymentMethod/paymentMethodAction";
import CustomInput from "../custom-input/CustomInput";
import CustomModal from "../custom-modal/CustomModal";

const initialState = {
  status: "inactive",
  name: "",
  description: "",
};
const EditAddPaymentMethodForm = ({ selectedPaymentMethod }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    setForm(selectedPaymentMethod);
  }, [selectedPaymentMethod]);

  const handleOnChange = (e) => {
    let { name, value, checked } = e.target;

    if (name === "status") {
      value = "status" ? "active" : "inactive";
    }
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { __v, updatedAt, createdAt, ...rest } = form;
    dispatch(updatePaymentMethodAction(rest));
    setForm(initialState);
    console.log(form);
  };

  const inputFields = [
    {
      label: "Payment method Name",
      name: "name",
      placeholder: "i.e Pay by Credit Card",
      required: true,
      type: "text",
      value: form.name,
    },
    {
      label: "Description",
      name: "description",
      placeholder: "Write more about the description",
      required: true,
      type: "text",
      as: "textarea",
      value: form.description,
    },
    {
      type: "submit",
      className: "btn btn-primary",
      value: "Update Payment Method",
    },
  ];
  console.log(form);
  return (
    <div>
      <CustomModal title="Edit and Update Payment Method">
        <Form onSubmit={handleOnSubmit}>
          <Form.Check
            name="status"
            label="status"
            type="switch"
            onChange={handleOnChange}
            checked={form.status === "active"}
          ></Form.Check>
          {inputFields.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}
        </Form>
      </CustomModal>
    </div>
  );
};

export default EditAddPaymentMethodForm;
