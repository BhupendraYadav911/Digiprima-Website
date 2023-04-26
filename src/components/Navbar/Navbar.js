import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { Search } from "react-bootstrap-icons";

function Navbars() {
  return (
    <Navbar bg="dark" variant="text-light" className="navbar-heading">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://www.digiprima.com/images/logo-digi.webp"
            className="website-logo"
            alt="logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll "></Navbar.Collapse>
        <Navbar.Collapse className="navbar-data">
          <Nav
            className=" my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text-light" href="#HOME">
              HOME
            </Nav.Link>
            <Nav.Link className="text-light" href="#INDUSTRY">
              INDUSTRY
            </Nav.Link>
            <Nav.Link className="text-light" href="#SERVICES">
              SERVICES
            </Nav.Link>
            <Nav.Link className="text-light" href="#COMPANY">
              COMPANY
            </Nav.Link>
            <Nav.Link className="text-light" href="#CAREER">
              CAREER
            </Nav.Link>
            <Nav.Link className="text-light" href="#BLOGS">
              BLOGS
            </Nav.Link>
            <Nav.Link className="text-light" href="#CONTACTUS">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Navbar.Text className="number">
          <a href="tel:+1 (347) 973 9732">
            <b> +1 (347) 973 9732 </b>{" "}
          </a>
        </Navbar.Text>
        <li className="icons">
          <Search color="white" size={20} />
        </li>
      </Container>
    </Navbar>
  );
}

export default Navbars;
