import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CustomModal from "../../component/custom-modal/CustomModal.js";
import AddPaymentMethodForm from "../../component/paymentMethod/AddPaymentMethodForm";
import PaymentMethodTable from "../../component/paymentMethod/PaymentMethodTable";
import AdminLayout from "../../layout/AdminLayout";
import { toggleShowModal } from "../system-state/SystemSlice.js";

const PaymentMethod = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(true);

  const handleOnShowForm = () => {
    setShowForm(true);
    dispatch(toggleShowModal(true));
  };
  return (
    <AdminLayout>
      <h3 className="p-3">Payment Method</h3>
      <div className="text-end">
        <Button variant="primary" onClick={handleOnShowForm}>
          <i class="fa-solid fa-plus"></i> Add New Button
        </Button>
      </div>

      {showForm && <AddPaymentMethodForm />}

      <PaymentMethodTable />
    </AdminLayout>
  );
};

export default PaymentMethod;
