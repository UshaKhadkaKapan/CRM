import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CustomCard from "../../component/custom-card/CustomCard";
import CustomTable from "../../component/CustomTable";
import AdminLayout from "../../layout/AdminLayout";
import { fetchProductionAction } from "../products/productAction";

// fake Data
const clientHead = ["fName", "lName", "JoinedDate"];
const clientInfo = [
  {
    fName: "Usha",
    lName: "Khadka",
    JoinedDate: "2/2/2022",
  },
  {
    fName: "Usha",
    lName: "Khadka",
    JoinedDate: "2/2/2022",
  },
  {
    fName: "Usha",
    lName: "Khadka",
    JoinedDate: "2/2/2022",
  },
];

const orderHeader = ["status", "Name", "OrderDate", "Total Order"];
const DashBoard = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const totalProduct = products.length;
  const activeProduct = products.filter(
    (item) => item.status === "active"
  ).length;
  const inActiveProduct = totalProduct - activeProduct;

  useEffect(() => {
    dispatch(fetchProductionAction());
  }, [dispatch]);
  return (
    <AdminLayout>
      <h4 className="pt-4">DashBoard</h4>
      <hr />
      <div className="products">
        <h5>Product Summary</h5>
        <Row className="g-3 mt-4">
          <Col>
            <CustomCard title="Total Products" count={totalProduct} />
          </Col>
          <Col>
            <CustomCard title="Active Products" count={activeProduct} />
          </Col>
          <Col>
            <CustomCard title="Inactive Products" count={inActiveProduct} />
          </Col>
        </Row>
      </div>
      <div className="user-info">
        <h5> Clients summary</h5>
        <CustomTable tableHeader={clientHead} tableData={clientInfo} />
      </div>
      <div className="lastest-order-info">
        <h5>Latest 5 Orders</h5>
        <CustomTable tableHeader={orderHeader} tableData={clientInfo} />
      </div>
      <div className="top selling-products mb-3">
        <h5>Top Selling Products</h5>
      </div>
    </AdminLayout>
  );
};

export default DashBoard;
