import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Table, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteCategoryAction,
  getCategoryAction,
} from "../../pages/Categories/catAction";

export const CategoryTable = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const [catToDelete, setCatToDelete] = useState([]);

  useEffect(() => {
    dispatch(getCategoryAction());
  }, []);

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);

    // to delete all the data at once
    if (value === "all") {
      checked
        ? setCatToDelete(categories.map((item) => item._id))
        : setCatToDelete([]);
      return;
    }
    // to delete one by one data
    if (checked) {
      // add or remove all the ids

      setCatToDelete([...catToDelete, value]);
    } else {
      setCatToDelete(catToDelete.filter((id) => id !== value));
    }
  };
  console.log(catToDelete);

  const handleOnDelete = () => {
    if (window.confirm("Are you sure that you want to delete the category")) {
      dispatch(deleteCategoryAction({ ids: catToDelete }));
      setCatToDelete([]);
    }
  };

  return (
    <Row className="mt-5">
      <Col>
        <p>{categories.length} Categories found</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <Form.Check value="all" onChange={handleOnSelect} />
              </th>
              <th>Status</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((item) => (
              <tr key={item._id}>
                <td>
                  <Form.Check
                    value={item._id}
                    onChange={handleOnSelect}
                    checked={catToDelete.includes(item._id)}
                  />
                </td>
                <td>{item.status}</td>
                <td>{item.name}</td>
                <td>
                  <Button variant="warning">Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {catToDelete.length > 0 && (
          <Button variant="danger" onClick={handleOnDelete}>
            Delete{catToDelete.length}
          </Button>
        )}
      </Col>
    </Row>
  );
};
