import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'


const book = () => {
  return (
    <div className='bg-secondary container-fluid '>
      <Container>
        <Row className='gx-5'>
          <Col className='col-lg-4 py-5'>
            <div className='py-5'>
              <h1 className='text-light mb-4'>
                Make your Appoinment
              </h1>
              <p className='text-light mb-0'>
                Get Special Repair service for your car from our experts with appointment and win car wash Free.
              </p>
            </div>
          </Col>
          <Col className='col-lg-8'>
            <div className='bg-dark h-100  d-flex flex-column justify-content-center text-center p-5'>
              <h1 className='text-light mb-5 mt-5'>
                Book For A Service
              </h1>
              <Form>
                <Row className='row g-3'>
                  <div className='col-12 col-sm-6'>
                    <Form.Control
                    className='border-0'
                    required
                    type='text'
                    placeholder='Your Full Name'
                    style={{height: "55px"}}
                    />
                  </div>
                  <div className='col-12 col-sm-6'>
                  <Form.Control
                    required
                    type='Email'
                    placeholder='Your Email'
                    style={{height: "55px"}}
                    />
                  </div>
                  <div className='col-12 col-sm-6'>
                    <Form.Select className='border-0' style={{height: "55px"}}>
                      <option>Select A Service</option>
                      <option value="1">Custom Aftermarket Installation</option>
                      <option value="2">Custom Aftermarket Installation</option>
                      <option value="3">Custom Aftermarket Installation</option>
                      <option value="4">Custom Aftermarket Installation</option>
                      <option value="5">Custom Aftermarket Installation</option>
                    </Form.Select>
                  </div>
                  <div className='col-12 col-sm-6'>
                    <Form.Select className='border=0' style={{height:"55px"}}>
                      <option>Service Master</option>
                      <option value="1">Karl Smith</option>
                      <option value="2">Karl Smith</option>
                      <option value="3">Karl Smith</option>
                      <option value="4">Karl Smith</option>
                      <option value="5">Karl Smith</option>
                    </Form.Select>
                  </div>
                  <div className='col-12 col-sm-6'>
                    <Form.Control 
                    type='date'
                    placeholder='Your Service'
                    style={{height:"55px"}}
                    />
                  </div>
                  <div className='col-12 col-sm-6'>
                    <Form.Select className='border-0' style={{height:"55px"}}>
                      <option>Service Time</option>
                      <option value="1">9:00 am</option>
                      <option value="2">9:00 am</option>
                      <option value="3">9:00 am</option>
                      <option value="4">9:00 am</option>
                      <option value="5">9:00 am</option>
                      <option value="6">9:00 am</option>
                    </Form.Select>
                  </div>
                  <div className='col-12'>
                    <Form.Control as="textarea" rows={5} className='border-0' placeholder='Special Request'/>
                  </div>
                  <div className='col-12'>
                    <Button  type='submit' className='btn bg-secondary w-100 py-3 text-light border-0'>
                      <span>
                      Book Now
                      </span>
                    </Button>
                  </div>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default book