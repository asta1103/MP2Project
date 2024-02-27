import React from 'react'
import { useState } from 'react';
import { Col, Card, Container, Form, Button} from 'react-bootstrap'

const Add = () => {
    const [formData, setFormData] = useState({
        client_fullname: '',
        client_email: '',
        client_service: '',
        client_technician: '',
        client_date: '',
        client_time: '',
        client_request: '',
      });

      const [saveSuccess, setSaveSuccess] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const  handleAddWalkIn = async (e) => {
      e.preventDefault();
    
      try {
        const response = await fetch('http://localhost:5000/clientBooking', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
            setSaveSuccess(true);
           
            // If the request is successful, fetch the updated list of clients
            const updatedResponse = await fetch('http://localhost:5000/clientlist');
            const updatedData = await updatedResponse.json();
            setFormData(updatedData);
            
    
            // Clear the form after successful addition
            setFormData({
                client_fullname: '',
                client_email: '',
                client_service: '',
                client_technician: '',
                client_date: '',
                client_time: '',
                client_request: '',
            });

            setTimeout(() => {
                setSaveSuccess(false);
            }, 3000);

          } else {
            console.error('Failed to add walk-in client');
            setSaveSuccess(false);
          }
        } catch (error) {
          console.error('Error:', error);
          setSaveSuccess(false);
        }
      };
    

  return (
    <div>
        <Container fluid>
        <Col xl={12}>
        {saveSuccess && (<div class="alert alert-success" role="alert">
           Add Client Successfully!
            </div>)}
            <Card className='mb-4'>
            <Card.Header>Add Walk In Client</Card.Header>
                <Card.Body>
                <Form onSubmit={ handleAddWalkIn}>
                    <div className='row gx-3 mb-3'>
                        <div className='col-md-6'>
                            <Form.Label className='small mb-1'>Full Name</Form.Label>
                            <Form.Control type='text'
                            name='client_fullname'
                            value={formData.client_fullname}
                            onChange={handleChange}
                            required
                            />
                        </div>
                        <div className='col-md-6 mb-3'>
                            <Form.Label className='small mb-1'>Email</Form.Label>
                            <Form.Control type='email'
                             name='client_email'
                             value={formData.client_email}
                             onChange={handleChange}
                             required
                            />
                        </div>
                        <div className='col-md-6 mb-3'>
                        <Form.Label className='small mb-1'>Select Service</Form.Label>
                            <Form.Select 
                            name='client_service'
                            value={formData.client_service}
                            onChange={handleChange}
                            >
                            <option></option>
                            <option value="1">Custom Aftermarket Installation</option>
                            <option value="2">Service 2</option>
                            <option value="3">Service 3</option>
                            <option value="4">Service 4</option>
                            <option value="5">Service 5</option>  
                            </Form.Select>    
                        </div>
                        <div className='col-md-6 mb-3'>
                        <Form.Label className='small mb-1'>Select Technician</Form.Label>
                        <Form.Select
                        name='client_technician'
                        value={formData.client_technician}
                        onChange={handleChange}
                        >
                            <option></option>
                            <option value="1">Karl Smith</option>
                            <option value="2">James Bond</option>
                            <option value="3">John Doe</option>
                            <option value="4">Henry Sy</option>
                            <option value="5">George Mendez</option>
                            </Form.Select>
                        </div>
                         <div className='col-md-6 mb-3'>
                            <Form.Label className='small mb-1'>Select Date</Form.Label>
                            <Form.Control type='date'
                             name='client_date'
                             value={formData.client_date}
                             onChange={handleChange}
                             />
                        </div>
                        <div className='col-md-6 mb-3 '>
                            <Form.Label className='small mb-1'>Select Time</Form.Label>
                            <Form.Select
                            name='client_time'
                            value={formData.client_time}
                            onChange={handleChange}
                            >
                            <option></option>
                            <option value="1">7:00 am</option>
                            <option value="2">8:00 am</option>
                            <option value="3">9:00 am</option>
                            <option value="4">10:00 am</option>
                            <option value="5">11:00 am</option>
                            <option value="6">1:00 pm</option>
                            <option value="7">2:00 pm</option>
                            <option value="8">3:00 pm</option>
                            <option value="9">4:00 pm</option>
                            </Form.Select>
                        </div>
                     </div>
                        <div class="mb-3">
                            <Form.Label className='small mb-1'>Special Request</Form.Label>
                            <Form.Control as ='textarea'
                            name='client_request'
                            value={formData.client_request}
                            onChange={handleChange}
                            />
                        </div>
                    
                        <Button className='btn-secondary' type='submit'>Save</Button>
                </Form>
                </Card.Body>
            </Card>
        </Col>
        </Container>
    </div> 
  )
}

export default Add