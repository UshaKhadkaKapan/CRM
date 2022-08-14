import React, { useEffect, useState } from "react";
import { Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PaginationPage } from "../../component/Pagination";
import AdminLayout from "../../layout/AdminLayout";
import { getOrderAction } from "./OrderAction";

const orderPerTable = 10;
const Orders = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(2);
  const [displayOrders, setDisplayOrders] = useState([]);
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    !orders.length && dispatch(getOrderAction());
    dispatch(getOrderAction());
    setDisplayOrders(orders);
  }, [dispatch]);

  const handleOnFilter = (e) => {
    setActive(1);
    const { value } = e.target;
    if (value === "all") {
      setDisplayOrders(orders);
    } else {
      setDisplayOrders(orders.filter((item) => item.status === value));
    }
  };

  const pages = Math.ceil(displayOrders.length / orderPerTable);

  const orderStartAt = (active - 1) * orderPerTable;
  const orderEndAt = orderStartAt + orderPerTable;
  return (
    <AdminLayout>
      <h4 className="py-3"> Order management </h4>
      <div className="d-flex justify-content-between mb-2 mt-4">
        <div>{displayOrders.length} product found</div>
        <div>
          <Form.Control placeholder="serch by buyer name" />
        </div>
        <div>
          <Form.Select defaultValue="" onChange={handleOnFilter}>
            <option value="all">--filter--</option>
            <option value="processing">processing</option>
            <option value="shipped">Shipped</option>
            <option value="cancelled">cancelled</option>
          </Form.Select>
        </div>
      </div>
      <hr />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Buyer Name</th>
            <th>Order Total</th>
            <th>Payment Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayOrders.map(
            (order, i) =>
              i >= orderStartAt &&
              i < orderEndAt && (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{order.status}</td>
                  <td>
                    {order.buyer.fName}
                    {order.buyer.lName}
                  </td>
                  <td>{order.totalAmount}</td>
                  <td>{order.paymentInfo.status}</td>
                  <td>
                    <Link to={"/orders/${12}"}>View Details</Link>
                  </td>
                </tr>
              )
          )}
          <tr>
            <td>1</td>
            <td>processing</td>
            <td>Usha Khadka</td>
            <td>5555</td>
            <td>Pending</td>
            <td>
              <Link to={"/orders/${12}"}>View Details</Link>
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <PaginationPage
          pages={pages}
          active={active}
          handleOnPaginationClick={setActive}
        />
      </div>
    </AdminLayout>
  );
};

export default Orders;
