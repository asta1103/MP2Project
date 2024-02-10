import React from 'react'
import './Contact.css';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';

const Contact = () => {
  return (
<div className="bg-info contact4 overflow-hiddedn position-relative mt-5 pt-5">
      <Container>
        <Row noGutters>
          <Col lg={6} className="contact-box mb-4 mb-md-0">
            <div>
              <h1 className="title font-weight-light text-white mt-2">Contact Us</h1>
              <Form className="mt-3">
                <Row>
                  <Col lg={12}>
                    <Form.Group controlId="formName" className="mt-2">
                      <Form.Control type="text" placeholder="Full Name" className="text-white" />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group controlId="formEmail" className="mt-2">
                      <Form.Control type="email" placeholder="Email Address" className="text-dark" />
                    </Form.Group>
                  </Col>
                  <Col lg={12}>
                    <Form.Group controlId="formMessage" className="mt-2">
                      <Form.Control as="textarea" rows={3} placeholder="Message" className="text-dark" />
                    </Form.Group>
                  </Col>
                  <Col lg={12} className="d-flex align-items-center mt-2">
                    <Button type="submit" className="btn bg-dark text-light px-3 py-2"><span>Submit</span></Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          <Col lg={6} className="right-image p-r-0">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.748161625018!2d120.98437920921928!3d14.613417085815495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b5fe234f5f41%3A0x421500f9a71da073!2s1333%20Concepcion%20St%2C%20Santa%20Cruz%2C%20Manila%2C%201008%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1707061473596!5m2!1sen!2sph"
              width="100%" height="538" frameBorder="0" style={{ border: '0' }} allowFullScreen
              data-aos="fade-left" data-aos-duration="3000"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact