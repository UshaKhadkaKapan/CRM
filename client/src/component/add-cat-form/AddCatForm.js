import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postCategoryAction } from "../../pages/Categories/catAction";
import CustomInput from "../custom-input/CustomInput";

const initialState = {
  status: "inactive",
  name: "",
  parentCatId: null,
};

const AddCatForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  const { categories } = useSelector((state) => state.categories);
  console.log(categories);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postCategoryAction(form));
  };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <h4>Add new Category</h4>
        <Row className="g-2 mt-3">
          <Col md="2">
            <Form.Check
              name="status"
              onChange={handleOnChange}
              label="status"
              type="switch"
            ></Form.Check>
          </Col>
          <Col md="3">
            <Form.Group controlId="formGridState">
              <Form.Select
                name="parentCatId"
                defaultValue=""
                onChange={handleOnChange}
              >
                <option>Select Parent Category</option>
                {categories.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md="4">
            <CustomInput
              name="name"
              placeholder="Category Name"
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col md="3">
            <Button type="submit">Add Category</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddCatForm;
