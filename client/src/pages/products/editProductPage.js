import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import ProductForm from "../../component/product-form/productForm";

const EditProductPage = () => {
  return (
    <AdminLayout>
      <div className="mt-3">Edit product </div>
      <hr />
      <ProductForm />
    </AdminLayout>
  );
};

export default EditProductPage;
