import React from "react";
import { Col, Row, Table } from "react-bootstrap";

const ProductTable = () => {
  return (
    <div>
      <Row className="mt-5">
        <Col>
          {/* <p>{categories.length} Categories found</p> */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Status</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default ProductTable;
