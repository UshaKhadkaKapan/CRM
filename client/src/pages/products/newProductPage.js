import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import ProductForm from "../../component/product-form/productForm";

const NewProductPage = () => {
  return (
    <AdminLayout>
      <div className="mt-3">Add new Product</div>
      <hr />
      <ProductForm />
    </AdminLayout>
  );
};

export default NewProductPage;
