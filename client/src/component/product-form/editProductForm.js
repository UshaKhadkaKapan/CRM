import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteProduct } from "../../helper/axios-helper";
import { getCategoryAction } from "../../pages/Categories/catAction";
import {
  postProductionAction,
  updateProductionAction,
} from "../../pages/products/productAction";
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
  thumbnail: "",
  images: [],
};

const EditProductForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const [newImages, setNewImages] = useState([]);
  const [imgToDelete, setImgToDelete] = useState();
  const { categories } = useSelector((state) => state.categories);
  const { selectedProduct } = useSelector((state) => state.products);

  useEffect(() => {
    // we need to fetch cat list if not in the state
    !categories.length && dispatch(getCategoryAction());
    setForm(selectedProduct);
  }, [selectedProduct]);

  const handleOnDelete = async () => {
    if (window.confirm("Are you sure you want to delete")) {
      const { _id } = selectedProduct;
      const responsePromise = deleteProduct(_id);
      toast.promise(responsePromise, { pending: "Deleting please wait..." });
      const { status, message } = await responsePromise;
      toast[status](message);

      status === "success" && navigate("/product");
    }
  };

  const handleOnImageToDelete = (e) => {
    const { checked, value } = e.target;
    const { images } = form;

    if (checked) {
      // remove path

      const filteredArg = images.filter((item) => item !== value);
      setForm({
        ...form,
        images: filteredArg,
      });
    } else {
      setForm({
        ...form,
        images: [...form.images, value],
      });
    }
  };

  const fields = [
    {
      label: "Name",
      name: "name",
      value: form.name,
      type: "text",
      placeholder: "Enter Product Name",
      required: true,
    },
    {
      label: "SKU",
      name: "sku",
      value: form.sku,
      type: "text",
      placeholder: "Unique product key",
      required: true,
      disabled: true,
      //   disabled means cannot changed
    },
    {
      label: "QTY",
      name: "qty",
      value: form.qty,
      type: "number",
      placeholder: "50",
      required: true,
    },
    {
      label: "Price",
      name: "price",
      value: form.price,
      type: "number",
      placeholder: "100",
      required: true,
    },
    {
      label: "Sales Price",
      name: "salesPrice",
      value: form.salesPrice,
      type: "number",
      placeholder: "80",
    },
    {
      label: "Sales start date",
      name: "salesStartDate",
      value: form.salesStartDate,
      type: "date",
    },
    {
      label: "Sales end date",
      name: "salesEndDate",
      value: form.salesEndDate,
      type: "date",
    },
    {
      label: "Description",
      name: "description",
      value: form.description,
      as: "textarea",
      placeholder: "Write product details",
      required: true,
      rows: 5,
    },
    {
      label: "Upload Images",
      name: "newImages",
      type: "file",
      rows: 5,
      multiple: true,
      accept: "image/*",
    },
  ];

  const imgList = selectedProduct.images || [];

  const handleOnChange = (e) => {
    const { checked, name, value, files } = e.target;

    if (name === "images") {
      return setNewImages(files);
    }
    if (name === "status") {
      value = checked ? "active" : "inactive";
    }

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { createdAt, updatedAt, __v, slug, rating, ...rest } = form;

    const formData = new FormData();

    for (const key in form) {
      formData.append(key, form[key]);
    }
    newImages.length &&
      [...newImages].map((img) => formData.append("images".img));

    dispatch(updateProductionAction(formData, form._id));
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
            checked={form.status === "active"}
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
                  <option
                    key={item._id}
                    value={item._id}
                    selected={item._id === form.catId}
                  >
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

        <div className="d-flex my-5">
          {imgList.map((imgLink, i) => (
            <div key={i} className="p-1">
              <Form.Check
                type="radio"
                label="Use as thumbnail"
                name="thumbnail"
                value={imgLink}
                onChange={handleOnChange}
                checked={form.thumbnail === imgLink}
              />

              <img
                src={process.env.REACT_APP_SERVER_ROOT_URL + "/" + imgLink}
                crossOrigin="anonymous"
                width="150px"
                className="img-thumbnail rounded"
                alt=""
              />
              <Form.Check
                label="Delete"
                value={imgLink}
                onChange={handleOnImageToDelete}
              />
            </div>
          ))}
        </div>
        <Button variant="primary" type="submit">
          Update Product
        </Button>
      </Form>
      <div className="text-end">
        <Button variant="danger" onClick={handleOnDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default EditProductForm;
