import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import "./global.css";
import profilePic from "./profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/userSlice";
import { apiCall } from "../apiCall";
import { SIGN_OUT } from "../URLS";
import { loadingAction } from "../store/loadingData";
const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.user.user;
  });
  const handleSignOut = async () => {
    const data = await apiCall("POST", SIGN_OUT, {});
    if (data.status === "ok") {
      dispatch(userAction.removeUser());
      navigate("/auth/signin");
    }
    dispatch(loadingAction.toggleLoading(false));
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary my-nav">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>
          Stock Managment
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="my-nav-link" as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link className="my-nav-link" as={Link} to={"/dashboard"}>
              Dashboard
            </Nav.Link>
          </Nav>
          {user ? (
            <NavDropdown
              className="nav-profile d-flex"
              title={
                <img
                  src={profilePic}
                  alt="Profile"
                  style={{
                    width: "40px",
                    borderRadius: "50%",
                    marginRight: "150px",
                  }}
                />
              } // Render profile picture as the titl
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={handleSignOut}>
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav className="" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link
                className="my-nav-link"
                as={Link}
                to={"/auth/signin"}
                variant="outline-success nav-profile"
              >
                {" "}
                Sign In
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
