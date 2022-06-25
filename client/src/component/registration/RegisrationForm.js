import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterationForm = () => {
  return (
    <Form>
      <h3>Registration Form</h3>
      <hr />
      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="fName" placeholder="First Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lName" placeholder="Last Name" />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Phone No.</Form.Label>
        <Form.Control
          type="text"
          name="Phone"
          placeholder="Enter your Phone Number"
        />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="date" name="dob" placeholder="Enter DOB" />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" name="address" placeholder="Enter address" />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="*******" />
      </Form.Group>

      <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="*****" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default RegisterationForm;
