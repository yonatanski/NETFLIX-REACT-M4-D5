import React, { Component } from "react"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import NetflixLogo from "../assets/netflix_logo.png"
import AvatarLogo from "../assets/avatar.png"
import "../css/style.css"
import { AiOutlineSearch } from "react-icons/ai"
import { IoIosNotifications } from "react-icons/io"
class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" className="sticky-top">
          <Navbar.Brand href="#home">
            <img
              src={NetflixLogo}
              class="img-fluid nav-logo-img"
              alt="Netflix-Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto text-white">
              <Nav.Link href="#features" className="mr-auto text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                Tv Shows
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                Movies
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                My List
              </Nav.Link>
            </Nav>
            <IoIosNotifications />
            <Nav.Link href="#deets">KIDS</Nav.Link>
            <AiOutlineSearch />
            <NavDropdown
              title={
                <img
                  src={AvatarLogo}
                  class="img-fluid nav-avatar-img"
                  alt="Netflix-Logo"
                />
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

export default NavBar
