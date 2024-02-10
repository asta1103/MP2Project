import React from 'react';
import  {Table} from 'react-bootstrap';
const ClientInfo = () => {
  return (
    <Table responsive="sm">
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
  )
}

export default ClientInfo