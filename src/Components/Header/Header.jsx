import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "../../Images/Screenshot_14-removebg-preview.png";

const Header = () => {
  return (
    <div>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          style={{ backgroundColor: "pink" }}
        >
          <Container>
            <Navbar.Brand href="#">
              <img src={Image} alt="" height="80px" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" style={{ fontWeight: "600" }}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="#action2" style={{ fontWeight: "600" }}>
                    Category
                  </Nav.Link>
                  <Nav.Link href="#action3" style={{ fontWeight: "600" }}>
                    Products
                  </Nav.Link>
                </Nav>
                <Button
                  className="rounded-pill"
                  variant="outlined"
                  style={{ fontWeight: "600" }}
                >
                  Contact
                </Button>
                <Button
                  className="rounded-pill border-2 border-dark bg-danger border-0 bg-opacity-75"
                  style={{ fontWeight: "600" }}
                >
                  Log In
                </Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
