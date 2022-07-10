import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "../../helper/axios-helper";
import {
  postCategoryAction,
  updateCategoryAction,
} from "../../pages/Categories/catAction";
import CustomInput from "../custom-input/CustomInput";

const initialState = {
  status: "inactive",
  name: "",
  parentCatId: null,
};

const EditCatForm = ({ selectCat }) => {
  //   console.log(selectCat);
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [update, setUpdate] = useState({});

  const { categories } = useSelector((state) => state.categories);
  console.log(categories);

  useEffect(() => {
    setForm(selectCat);
  }, [selectCat]);

  const handleOnChange = (e) => {
    let { checked, name, value } = e.target;

    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { name, _id, parentCatId, status } = form;
    dispatch(updateCategoryAction({ name, _id, parentCatId, status }));
    console.log(form);
    // dispatch(postCategoryAction(form));
  };

  //   const handleOnUpdate = () => {
  //     if (window.confirm("Are you sure you wanna update the item??")) {
  //       dispatch(updateCategory(form.name, form.parentCatId, form.status));
  //       setUpdate({});
  //     }
  //   };

  return (
    <div>
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-2 mt-3">
          <Col md="2">
            <Form.Check
              name="status"
              onChange={handleOnChange}
              label="status"
              type="switch"
              checked={form.status === "active"}
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
                    <option
                      key={item._id}
                      value={item._id}
                      selected={item._id === form.parentCatId}
                    >
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
              value={form.name}
            />
          </Col>
          <Col md="3">
            <Button type="submit">Update Category</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EditCatForm;
