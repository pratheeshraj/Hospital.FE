import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Assets/Logo.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./navbar.css";

import { ToastContainer, } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function NavBars() {
  return (
    <div className="navStick">
      <ToastContainer />
      <Navbar expand="lg">
        <Container fluid>
          <Link to={"/"} className="navbar-brand">
            <img src={Logo} title="logo" alt="img" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/ourteam"} className="nav-link">
                Doctors
              </Link>
              <NavDropdown title="About us" id="basic-nav-dropdown">
                <Link to={"/service"} className="dropdown-item">
                  Services
                </Link>
              </NavDropdown>
              <Link to={"/booking"} className="nav-link">
                Booking
              </Link>
                <NavDropdown title="Login" id="basic-nav-dropdown">
                  <Link to={"/login"} className="dropdown-item">
                    Login
                  </Link>
                  <Link to={"/register"} className="dropdown-item">
                    Register
                  </Link>
             <a className="dropdown-item">
         <button className="btn btn-primary btn-sm mt-2">Logout</button>
             </a>
                </NavDropdown>
              
              <Link to="/Report" className="nav-link">
                <button type="button">
                  Report
                  <span>
                    <IoIosArrowForward />
                  </span>
                </button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBars;
