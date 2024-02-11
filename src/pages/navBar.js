import React from 'react';
import '../pages/navbar.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const  NavBar = () => {
  return (
    <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-dark fw-semibold'>
              JGarage.
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-5 justify-content-end w-100'>
              <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/service' className='text-uppercase'>Service</Nav.Link>
              <Nav.Link href='/team' className='text-uppercase'>Our Team</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
              <Button href='/book' className='text-uppercase bg-secondary border-0'>Book Now</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar