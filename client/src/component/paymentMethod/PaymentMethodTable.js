import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePaymentMethodAction,
  getPaymentMethodAction,
} from "../../pages/paymentMethod/paymentMethodAction";
import { toggleShowModal } from "../../pages/system-state/SystemSlice";

import AddPaymentMethodForm from "./AddPaymentMethodForm";
import EditAddPaymentMethodForm from "./EditAddPaymentMethod";

const PaymentMethodTable = ({ showForm, setShowForm }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState({});
  const dispatch = useDispatch();
  const { paymentMethods } = useSelector((state) => state.paymentMethod);

  useEffect(() => {
    dispatch(getPaymentMethodAction());
  }, []);

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure, you want to delete?")) {
      dispatch(deletePaymentMethodAction(_id));
    }
  };

  const handleOnEdit = (item) => {
    setSelectedPaymentMethod(item);
    setShowForm("edit");
    dispatch(toggleShowModal(true));
  };

  const whichForm = {
    add: <AddPaymentMethodForm />,
    edit: (
      <EditAddPaymentMethodForm selectedPaymentMethod={selectedPaymentMethod} />
    ),
  };
  return (
    <div className="table">
      {whichForm[showForm]}
      <div>49 Payment Method found</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {paymentMethods.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <Button variant="warning" onClick={() => handleOnEdit(item)}>
                  Edit
                </Button>

                <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PaymentMethodTable;
