import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShowSideMenu } from "../../pages/system-state/SystemSlice";

export const Sildemenu = () => {
  const dispatch = useDispatch();

  const { showSideMenu } = useSelector((state) => state.system);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch
      </Button> */}

      <Offcanvas
        show={showSideMenu}
        onHide={() => dispatch(toggleShowSideMenu())}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CMS Admin </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="fs-3">
              <Link to="/dashboard" className="nav-link">
                <i class="fa-solid fa-gauge"></i>DashBoard
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="fs-3">
              <Link to="/categories" className="nav-link">
                Categories
              </Link>
            </ListGroup.Item>
            <ListGroup.Item className="fs-3">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-3"
            >
              <Link to="/paymentmethod" className="nav-link">
                Payment Method
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-3"
            >
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-3"
            >
              <Link to="/orders" className="nav-link">
                Orders
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-3"
            >
              <Link to="/settings" className="nav-link">
                Settings
              </Link>
            </ListGroup.Item>
            <ListGroup.Item
              onClick={() => dispatch(toggleShowSideMenu())}
              className="fs-3"
            >
              <Link to="/adminprofile" className="nav-link">
                Admin Profile
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
