import React from "react";
import AddCatForm from "../../component/add-cat-form/AddCatForm";
import { CategoryTable } from "../../component/categoryTable/CategoryTable";
import AdminLayout from "../../layout/AdminLayout";

const Categories = () => {
  return (
    <AdminLayout>
      <h2 className="p-3">Categories management</h2>
      {/* form here */}
      <AddCatForm />
      <hr />
      <CategoryTable />
    </AdminLayout>
  );
};

export default Categories;
