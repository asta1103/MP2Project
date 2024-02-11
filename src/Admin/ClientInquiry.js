import React from 'react'
import { Card, Table } from 'react-bootstrap'
import NavbarAdmin from './AdComp/NavbarAdmin';
import Sidebar from '../Admin/Sidebar';

const ClientInquiry = () => {
  return (

    <div className='container-fluid bg-secondary min-vh-100'>
        <div className='row'>
            <div className='col-2 bg-white vh-100'>
                <Sidebar/>
            </div>
            <div className='col-10'>
                 <NavbarAdmin/>

                 <Card className='border-1'>
                    <Card.Header>
                        <h5 className='card-tittle'>Client Inquiry List</h5>
                        <Table striped bordered hover variant="light" responsive="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
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
                                </tr>
                             </tbody>
                        </Table>
                     </Card.Header>
                </Card>
             </div>
                
        </div>

    </div>
            



    

  )
}

export default ClientInquiry