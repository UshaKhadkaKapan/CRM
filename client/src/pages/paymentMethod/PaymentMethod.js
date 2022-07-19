import React from "react";
import { Button } from "react-bootstrap";
import PaymentMethodTable from "../../component/paymentMethod/PaymentMethodTable";
import AdminLayout from "../../layout/AdminLayout";

const PaymentMethod = () => {
  return (
    <AdminLayout>
      <h3 className="p-3">Payment Method</h3>
      <div className="text-end">
        <Button variant="primary">
          <i class="fa-solid fa-plus"></i> Add New Button
        </Button>
      </div>

      <PaymentMethodTable />
    </AdminLayout>
  );
};

export default PaymentMethod;
