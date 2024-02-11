import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import NavbarAdmin from './AdComp/NavbarAdmin';
import Sidebar from '../Admin/Sidebar';


const Profile = () => {
  return (

    <div className='container-fluid bg-secondary min-vh-100'>
        <div className='row'>
            <div className='col-2 bg-white vh-100'>
                <Sidebar/>
            </div>
            <div className='col-10'>
                 <NavbarAdmin/>

                 <Col xl={12}>
                    <Card className='mb-4'>
                         <Card.Header>Profile</Card.Header>
                         <Card.Body>
                            <Form>
                                <div className='row gx-3 mb-3'>
                                     <div className='col-md-6'>
                                        <Form.Label className='small mb-1'>First Name</Form.Label>
                                         <Form.Control type='text'/>
                                    </div>
                                     <div className='col-md-6'>
                                        <Form.Label className='small mb-1'>Last Name</Form.Label>
                                        <Form.Control type='text'/>
                                    </div>
                                    <div className='col-md-6'>
                                         <Form.Label className='small mb-1'>Position</Form.Label>
                                        <Form.Control type='text'/>
                                    </div>
                                    <div className='col-md-6'>
                                        <Form.Label className='small mb-1'>Location</Form.Label>
                                        <Form.Control type='text'/>
                                    </div>
                                 </div>
                                    <div class="mb-3">
                                        <Form.Label className='small mb-1'>Email</Form.Label>
                                        <Form.Control type='email'/>
                                    </div>
                                <div className='row gx-3 mb-3'>
                                    <div className='col-md-6'>
                                        <Form.Label className='small mb-1'>Phone Number</Form.Label>
                                        <Form.Control type='tel'/>
                                    </div>
                                    <div className='col-md-6'>
                                        <Form.Label className='small mb-1'>Birthday</Form.Label>
                                        <Form.Control type='date'/>
                                    </div>
                                 </div>
                                 <Button className='btn-secondary' type='button'>Update Changes</Button>
                                </Form>
                             </Card.Body>
                         </Card>
                    </Col>
            </div>
        </div>
    </div>

   


    
   
  )
}

export default Profile