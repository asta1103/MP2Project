import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useState } from 'react';


const Book = () => {

  const [formData, setFormData] = useState({
    client_fullname: '',
    client_email: '',
    client_service: '',
    client_technician: '',
    client_date: '',
    client_time: '',
    client_request: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/clientBooking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.code === 'success') {
      window.alert('Booking successful');
      console.log(formData)
     
    } else {
      console.error('Booking failed:', data.message); 
     
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

  return (
    <div className='bg-secondary container-fluid '>
      <Container>
        <Row className='gx-5'>
          <Col className='col-lg-4 py-5'>
            <div className='py-5'>
              <h3 className='text-light mb-4'>
                Make your Appoinment
              </h3>
              <p className='text-light mb-0'>
                Get Special Repair service for your car from our experts with appointment and win car wash Free.
              </p>
            </div>
          </Col>
          <Col className='col-lg-8 mt-5 p-5'>
            <div className='bg-dark h-100  d-flex flex-column justify-content-center text-center p-5'>
              <h1 className='text-light mb-5'>
                Book For A Service
              </h1>
              <Form onSubmit={handleSubmit}>
                <Row className='row g-3'>
                  <Col xs={12} sm={6} classname='mb-1'>
                    <Form.Control
                    className='border-0'
                    placeholder='Your Full Name'
                    style={{height: "55px"}}
                    type='text'
                    name='client_fullname'
                    value={formData.client_fullname}
                    onChange={handleChange}
                    required 
                    />
                  </Col>
                  <Col xs={12} sm={6} classname='mb-1'>
                  <Form.Control
                    placeholder='Your Email'
                    style={{height: "55px"}}
                    type='Email'
                    name='client_email'
                    value={formData.client_email}
                    onChange={handleChange}
                    required
                    />
                  </Col>
                  <Col xs={12} sm={6} classname='mb-1'>
                  <Form.Select
                      className='border-0'
                      style={{ height: '55px' }}
                      name='client_service'
                      value={formData.client_service}
                      onChange={handleChange}
                    >
                      <option>Select A Service</option>
                      <option value={1}>Custom Aftermarket Installation</option>
                      <option value={2}>Service 2</option>
                      <option value={3}>Service 3</option>
                      <option value={4}>Service 4</option>
                      <option value={4}>Service 5</option>
                    </Form.Select>
                  </Col>
                  <Col xs={12} sm={6} classname='mb-1'>
                  <Form.Select
                      className='border-0'
                      style={{ height: '55px' }}
                      name='client_technician'
                      value={formData.client_technician}
                      onChange={handleChange}
                    >
                      <option>Select A Technician</option>
                      <option value={1}>Karl Smith</option>
                      <option value={2}>James Bond</option>
                      <option value={3}>John Doe</option>
                      <option value={4}>Henry Sy</option>
                      <option value={5}>George Mendez</option>
                    </Form.Select>
                  </Col>
                  <Col xs={12} sm={6} classname='mb-1'>
                    <Form.Control 
                    type='date'
                    placeholder='Your Service'
                    style={{height:"55px"}}
                    name='client_date'
                    value={formData.client_date}
                    onChange={handleChange}
                    />
                  </Col>
                  <Col xs={12} sm={6} classname='mb-1'>
                  <Form.Select
                      className='border-0'
                      style={{ height: '55px' }}
                      name='client_time'
                      value={formData.client_time}
                      onChange={handleChange}
                    >
                      <option>Select A Time</option>
                      <option value={1}>7:00 am</option>
                      <option value={2}>8:00 am</option>
                      <option value={3}>9:00 am</option>
                      <option value={4}>10:00 am</option>
                      <option value={5}>11:00 am</option>
                      <option value={6}>1:00 pm</option>
                      <option value={7}>2:00 pm</option>
                      <option value={8}>3:00 pm</option>
                      <option value={9}>4:00 pm</option>
                    </Form.Select>
                  </Col>
                  <Col xs={12} mb={3}>
                    <Form.Control 
                      as="textarea" rows={5} 
                      className='border-0'
                      placeholder='Special Request'
                      name='client_request'
                      value={formData.client_request}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col xs={12}>
                    <Button  type='submit' className='btn bg-secondary w-100 py-3 text-light border-0'>
                      <span>
                      Submit Booking
                      </span>
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Book