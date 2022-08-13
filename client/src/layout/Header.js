import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowSideMenu } from "../pages/system-state/SystemSlice";

function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.adminUser);
  return (
    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          {" "}
          <i
            class="fa-solid fa-bars"
            onClick={() => dispatch(toggleShowSideMenu())}
          ></i>{" "}
          CMS admin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user._id ? (
              "Welcome" + " " + user.fName
            ) : (
              <>
                <Link to="/" className="nav-link">
                  Login
                </Link>
                <Link to="/Register" className="nav-link">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
