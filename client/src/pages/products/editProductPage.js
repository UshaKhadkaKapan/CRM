import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import EditProductForm from "../../component/product-form/editProductForm";
import AdminLayout from "../../layout/AdminLayout";

const EditProductPage = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
    // _id && fetch the product details and store as a selected products
  }, []);
  return (
    <AdminLayout>
      <div className="mt-3">Edit product </div>
      <hr />
      <EditProductForm />
    </AdminLayout>
  );
};

export default EditProductPage;
