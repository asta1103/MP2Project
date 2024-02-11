import React from 'react'
import { JustifyLeft, PersonCircle } from 'react-bootstrap-icons'
import { Dropdown } from 'react-bootstrap'

const NavbarAdmin = () => {
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 px-4 borber-bottom mb-4">
    <div className="d-flex align-items-between align-items-center">
        <JustifyLeft className=" primary-text fs-4 me-3"  id="menu-toggle"/>
        <h2 className="fs-2 m-0">Dashboard</h2>
    </div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <Dropdown>
            <Dropdown.Toggle variant="transparent border-0" id="dropdown-basic">
                <PersonCircle className='fs-4'/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </ul>
    </div>
</nav>

    
  )
}

export default NavbarAdmin