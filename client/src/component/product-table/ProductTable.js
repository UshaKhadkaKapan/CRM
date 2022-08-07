import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductionAction } from "../../pages/products/productAction";
import { Link } from "react-router-dom";

const ProductTable = () => {
  const dispatch = useDispatch();
  const [displayProducts, setDisplayProduct] = useState([]);

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    !displayProducts.length && dispatch(fetchProductionAction());
    products.length && setDisplayProduct(products);
  }, [products, dispatch, displayProducts]);

  return (
    <div>
      <Row className="mt-5">
        <Col>
          <p>{displayProducts.length} Product found </p>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th> #</th>
                <th> Thumbnail</th>
                <th> Status</th>
                <th> Name</th>
                <th>QTY</th>
                <th>Price</th>
                <th>Sales Price</th>
                <th>Sales Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayProducts.length > 0 &&
                displayProducts.map((item, i) => (
                  <tr key={item._id}>
                    <td>{i + 1}</td>
                    <td>
                      <img src={item.thumbnail} alt="image" width="150px" />
                    </td>
                    <td>{item.status}</td>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>${item.price}</td>
                    <td>${item.salesPrice}</td>
                    <td>
                      {item.salesStartDate.slice(0, 10)} {" To "}
                      {item.salesEndDate.slice(0, 10)}
                    </td>
                    <td>
                      <Link to={`/product/edit/${item._id}`}>
                        <Button variant="warning">Edit</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default ProductTable;
