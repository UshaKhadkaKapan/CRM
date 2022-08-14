import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AdminLayout from "../../layout/AdminLayout";
import { getCustomersAction } from "./CustomerAction";

const Users = () => {
  const dispatch = useDispatch();

  const { customers } = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(getCustomersAction());
  }, [dispatch]);
  return (
    <AdminLayout>
      <h4 className="py-5">Customer management</h4>
      <Table striped hover bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>
                {item.fName}
                {item.lName}
              </td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.action}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </AdminLayout>
  );
};

export default Users;
