import { useEffect, useState } from "react";
import { Table, Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoryAction,
  getCategoryAction,
} from "../../pages/Categories/catAction";
import { toggleShowModal } from "../../pages/system-state/SystemSlice";
import EditCatForm from "../add-cat-form/EditCatForm";
import { CustomModal } from "../custom-modal/CustomModal";

export const CategoryTable = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const [catToDelete, setCatToDelete] = useState([]);
  const [selectCat, setSelectCat] = useState({});

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
      // check if the value exist in parentCatIds

      const hasChildCat = categories.filter(
        (item) => item.parentCatId === value
      );
      if (hasChildCat.length) {
        return alert(
          "This category have a child categories so if you wanna delete then please add child categories or assign to other"
        );
      }

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

  const handleOnEdit = (catObj) => {
    dispatch(toggleShowModal(true));
    setSelectCat(catObj);
  };

  const parentCatIds = categories.filter((item) => item.parentCatId === null);
  const childCats = categories.filter((item) => item.parentCatId !== null);
  return (
    <Row className="mt-5">
      <Col>
        <CustomModal title={"Update Category"}>
          {" "}
          <EditCatForm selectCat={selectCat} />
        </CustomModal>

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
            {parentCatIds.map((item) => (
              <>
                <tr key={item._id} className="bg-warning">
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
                    <Button
                      variant="warning"
                      onClick={() => handleOnEdit(item)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
                {childCats.map(
                  (cat) =>
                    cat.parentCatId === item._id && (
                      <tr key={cat._id}>
                        <td>
                          <Form.Check
                            value={cat._id}
                            onChange={handleOnSelect}
                            checked={catToDelete.includes(cat._id)}
                          />
                        </td>
                        <td>{cat.status}</td>
                        <td>{cat.name}</td>
                        <td>
                          <Button
                            variant="warning"
                            onClick={() => handleOnEdit(cat)}
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    )
                )}
              </>
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
