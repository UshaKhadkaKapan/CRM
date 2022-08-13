import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryAction } from "../../pages/Categories/catAction";
import { postProductionAction } from "../../pages/products/productAction";
import CustomInput from "../custom-input/CustomInput";

const initialState = {
  status: "inactive",
  catId: null,
  name: "",
  sku: "",
  description: "",
  price: 0,
  qty: 0,
  salesPrice: 0,
  salesStartDate: null,
  salesEndDate: null,
};

const ProductForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [images, setImages] = useState([]);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    // we need to fetch cat list if not in the state
    !categories.length && dispatch(getCategoryAction());
  }, []);
  const fields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter Product Name",
      required: true,
    },
    {
      label: "SKU",
      name: "sku",
      type: "text",
      placeholder: "Unique product key",
      required: true,
    },
    {
      label: "QTY",
      name: "qty",
      type: "number",
      placeholder: "50",
      required: true,
    },
    {
      label: "Price",
      name: "price",
      type: "number",
      placeholder: "100",
      required: true,
    },
    {
      label: "Sales Price",
      name: "salesPrice",
      type: "number",
      placeholder: "80",
    },
    {
      label: "Sales start date",
      name: "salesStartDate",
      type: "date",
    },
    {
      label: "Sales end date",
      name: "salesEndDate",
      type: "date",
    },
    {
      label: "Description",
      name: "description",
      as: "textarea",
      placeholder: "Write product details",
      required: true,
      rows: 5,
    },
    {
      label: "Upload Images",
      name: "images",
      type: "file",
      required: true,
      rows: 5,
      multiple: true,
      accept: "image/*",
    },
  ];

  const handleOnChange = (e) => {
    const { checked, name, value, files } = e.target;

    if (name === "images") {
      return setImages(files);
    }
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (const key in form) {
      formData.append(key, form[key]);
    }
    images.length && [...images].map((img) => formData.append("images", img));

    dispatch(postProductionAction(formData));
  };

  return (
    <div className="py-3">
      <div className="py-3">
        <Link to="/products">
          <Button variant="secondary">&lt; Back</Button>
        </Link>
      </div>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Check
            type="switch"
            label="status"
            name="status"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select
            defaultValue=""
            name="catId"
            required
            onChange={handleOnChange}
          >
            <option value="">--Select Option--</option>
            {categories.map((item) => {
              return (
                item.parentCatId && (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                )
              );
            })}
          </Form.Select>
        </Form.Group>

        {fields.map((field, i) => (
          <CustomInput {...field} onChange={handleOnChange} />
        ))}

        <Button variant="primary" type="submit">
          Submit New Product
        </Button>
      </Form>
    </div>
  );
};

export default ProductForm;
