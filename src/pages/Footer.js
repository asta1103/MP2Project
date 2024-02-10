import React from 'react';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Facebook, Instagram, Messenger, Youtube } from 'react-bootstrap-icons';

const Footer = () => {
  return (
  <footer className='footer'>
    <Container>
      <Row className= 'text-center'>
        <Col lg={12} sm={12} xs={12}>
          <div className='footer_menu'>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/service'>Service</a></li>
              <li><a href='/team'>Our Team</a></li>
              <li><a href='/about'>About Us</a></li>
              <li><a href='/contact'>Contact Us</a></li>
            </ul>
          </div>
          <div className='footer_copyright'>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          JGarage.com
        </div>
        <div className='footer_profile'>
          <ul>
            <li><a href='/'><Facebook/></a></li>
            <li><a href='/'><Messenger/></a></li>
            <li><a href='/'><Instagram/></a></li>
            <li><a href='/'><Youtube/></a></li>
          </ul>
        </div>
        </Col>
      </Row>
    </Container>

  </footer>
  )
}

export default Footer