import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JustifyLeft, PersonCircle } from 'react-bootstrap-icons';
import { Dropdown, Nav, Navbar } from 'react-bootstrap';

const NavbarAdmin = ({Toggle}) => {
  const navigate = useNavigate();
  
  const handleProfile = () => {
    navigate('/profile');
  };

  const [userFirstname, setUserFirstname] = useState('');

  useEffect(() => {
    const storedUserProfile = JSON.parse(localStorage.getItem('userProfile'));

    if (storedUserProfile && storedUserProfile.firstname) {
      setUserFirstname(storedUserProfile.firstname);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userProfile');
    navigate('/login');
  };

  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4 border-0 text-light mb-4">
      <div className="d-flex align-items-between align-items-center">
        <JustifyLeft className="primary-text fs-4 me-3" onClick={Toggle} />
        <h2 className="fs-2 m-0">Dashboard</h2>
      </div>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <Navbar.Collapse id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <p className='align-items-center text-center fs-5 fw-bold'>{userFirstname}</p>

          <Dropdown>
            <Dropdown.Toggle variant="transparent border-0 text-white" id="dropdown-basic">
              <PersonCircle className='fs-4' />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleProfile}>Profile</Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ul>
      </Navbar.Collapse>
    </Nav>
  );
};

export default NavbarAdmin;
