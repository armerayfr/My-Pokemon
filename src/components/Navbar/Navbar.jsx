import React from "react";
import "./Navbar.css";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

class MyNavbar extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: "100", marginRight: "100" }}>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default MyNavbar;
