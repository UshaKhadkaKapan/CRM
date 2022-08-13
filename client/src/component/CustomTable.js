import React from "react";
import { Table } from "react-bootstrap";

const CustomTable = ({ tableHeader = [], tableData = [] }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {tableHeader.map((head, i) => (
            <th key={i}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, i) => (
          <tr>
            {Object.keys(data).map((key, i) => (
              <td key={i}>{data[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;
