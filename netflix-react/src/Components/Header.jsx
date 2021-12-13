import React, { Component } from "react"
import { AiOutlineAlignLeft } from "react-icons/ai"
import { BsFillGridFill } from "react-icons/bs"
import { Dropdown } from "react-bootstrap"
import "../css/style.css"
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="d-flex">
          <h2 className="mr-5">Tv Show</h2>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{ backgroundColor: "#221f1f" }}
              className="btn-secondary btn-sm dropdown-toggle rounded-0"
            >
              Geners
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu dropdown-menu-dark">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <AiOutlineAlignLeft />
          <BsFillGridFill />
        </div>
      </div>
    )
  }
}

export default Header
