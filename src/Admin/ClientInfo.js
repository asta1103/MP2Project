import React from 'react';
import { Card, Container, Table } from 'react-bootstrap';
import NavbarAdmin from './AdComp/NavbarAdmin';


const ClientInfo = () => {
  return (
    <div>
      <NavbarAdmin  />
      <Container fluid>
      <Card className='border-1'>
            <Card.Header>
              <h5 className='card-title'>Client Booking List</h5>
              <div className='table-responsive'>
              <Table striped bordered hover variant="light" responsive="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Service</th>
                    <th>Technician</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Request</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                </tbody>
              </Table>
              </div>
            </Card.Header>
          </Card>
      </Container>
    </div>     
       
  );
};

export default ClientInfo;
