import React from "react";
import * as Bootsrap from "react-bootstrap";
import Image from "react-bootstrap/Image";
import logo from "../../images/logo.png";

const linkStyle = {
  fontSize: "20px",
};

const Navbar: React.FC = (): JSX.Element => {
  return (
    <div>
      <Bootsrap.Navbar bg="light" expand="lg" id="home">
        <Bootsrap.Navbar.Brand href="#home">
          <Bootsrap.Col xs={3} md={5}>
            <Image src={logo} fluid />
          </Bootsrap.Col>
        </Bootsrap.Navbar.Brand>
        <Bootsrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Bootsrap.Navbar.Collapse id="basic-navbar-nav">
          <Bootsrap.Nav className="ml-auto">
            <Bootsrap.Nav.Link style={linkStyle} href="#home">
              Home
            </Bootsrap.Nav.Link>
            <Bootsrap.Nav.Link style={linkStyle} href="#about">
              About
            </Bootsrap.Nav.Link>
            <Bootsrap.Nav.Link style={linkStyle} href="#work">
              Work
            </Bootsrap.Nav.Link>
            <Bootsrap.Nav.Link style={linkStyle} href="#contact">
              Contact
            </Bootsrap.Nav.Link>
          </Bootsrap.Nav>
        </Bootsrap.Navbar.Collapse>
      </Bootsrap.Navbar>
    </div>
  );
};

export default Navbar;
