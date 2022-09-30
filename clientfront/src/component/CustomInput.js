import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = ({ label, ...rest }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        {label && <Form.Label>{label}</Form.Label>}

        <Form.Control {...rest} />
      </Form.Group>
    </div>
  );
};

export default CustomInput;
