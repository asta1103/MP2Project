import React from 'react';
import '../Admin/admin.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import NavbarAdmin from './AdComp/NavbarAdmin';
import Sidebar from '../Admin/Sidebar';




const Admin = () => {
    
  return (

    <div className='container-fluid bg-secondary min-vh-100'>
        <div className='row'>
           <div className='col-2 bg-white vh-100'>
                <Sidebar/>
            </div>
            <div className='col-10'>
                 <NavbarAdmin />
                 <main className='content px-3 py-2'>
                    <Container>
                          <Row>
                             <Col Col={12} md={6} className='d-flex'>
                               <Card className='flex-fill border-0 illustration'>
                                  <Card.Body className='p-0 d-flex flex-fill'>
                                    <Row className='g-0 w-100'>
                                       <Col Col={6}>
                                          <div className='p-3 m-1'>
                                            <h4>Welcome Admin</h4>
                                            <p class="mb-0">Admin Dashboard, JGarage.</p>
                                          </div>
                                        </Col>
                                      </Row>
                                  </Card.Body>
                               </Card>
                             </Col>
                               <Col Col={12} md={6} className='d-flex'>
                                 <Card className='flex-fill border-0'>
                                    <Card.Body className='py-4'>
                                      <div className='d-flex align-items-start'>
                                        <div className='flex-grow-1'>
                                           <h4 className='mb-2'>
                                              PHP 78,000.00
                                             </h4>
                                              <p className='mb-2'>
                                                Total Earnings
                                              </p>
                                                <div className='mb-0'>
                                                   <span className='badge text-dark me-2'> 
                                                      +7.8%
                                                   </span>
                                                   <span className='text-muted'>
                                                       Since Last Month
                                                    </span>
                                                  </div>
                                            </div>
                                        </div>
                                     </Card.Body>
                                    </Card>
                                 </Col>
                                </Row>
                               </Container>
                             </main>
                           </div>
                        </div>
                    </div>
  
  )
}

export default Admin