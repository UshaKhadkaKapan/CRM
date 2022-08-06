import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLayout from "../../layout/AdminLayout";

const Product = () => {
  return (
    <AdminLayout>
      <h1 className="mt-5">Product </h1>
      <div className="text-end">
        <Link to="/product/new">
          <Button variant="primary">
            <i class="fa-solid fa-plus"></i> Add New Product
          </Button>
        </Link>
      </div>
      <hr />
      <div className="product-list">{/* show table component here */}</div>
    </AdminLayout>
  );
};

export default Product;
