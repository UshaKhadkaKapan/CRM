import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { postAdminUser } from "../../helper/axios-helper";
import { toast } from "react-toastify";

const RegisterationForm = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      return toast.error("Password and  confirm password do not match");
    }

    const { confirmPassword, ...rest } = form;
    const { status, message } = await postAdminUser(rest);

    toast[status](message);
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <h3>Registration Form</h3>
      <hr />
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="fName"
          placeholder="First Name"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lName"
          placeholder="Last Name"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Phone No.</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          placeholder="Enter your Phone Number"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>DOB</Form.Label>
        <Form.Control
          type="date"
          name="dob"
          placeholder="Enter DOB"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          placeholder="Enter address"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="***"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="***"
          onChange={handleOnChange}
          required
        />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group> */}
      <Button variant="primary" type="submit">
        Register
      </Button>
      <div className="text-end">
        ALready Register<Link to="/">Login</Link>
      </div>
    </Form>
  );
};

export default RegisterationForm;
