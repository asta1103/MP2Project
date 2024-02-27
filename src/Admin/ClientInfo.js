import React from 'react';
import { Button, Card, Container, Table, Modal, Form} from 'react-bootstrap';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';




const ClientInfo = () => {

  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null); 
  const [status, setStatus] = useState(); 

  const statusLabels = {
    1: 'On Progress',
    2: 'Done',
    3: 'Ready for pick-up',
  };

  useEffect(() => {
    // Fetch data from the server and update the state
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/clientlist');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []); // Empty dependency array means it will run only once when the component mounts


  // Function to handle view button click
  const handleViewClick = (booking) => {
    setSelectedBooking(booking);
    setStatus(booking.status);
  };


  const handleStatusUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/updateStatus/${selectedBooking.client_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
  
      if (!response.ok) {
        console.error('Failed to update status:', response.statusText);
        const responseBody = await response.text();
        console.error('Response body:', responseBody);
        throw new Error('Failed to update status');
      }
  
      console.log('Status updated successfully');
  
      // Update the local state (bookings) with the new status
      setBookings(prevBookings => {
        return prevBookings.map(booking => {
          if (booking.client_id === selectedBooking.client_id) {
            return { ...booking, status: parseInt(status) };
          }
          return booking;
        });
      });
  
      // Close the modal
      setSelectedBooking(null);
  
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };
  
  

  return (
    <div>
      <Container fluid>
      <Card className='border-1'>
            <Card.Header className='d-flex justify-content-between' >
              <h5 className='card-title'>Client Booking List</h5>
              <Link to ='/addclient'>
              <Button type='button' variant="primary" size="sm">Add Walk-in</Button>
              </Link>
              </Card.Header>
              <div className='table-responsive'>
              <Table striped bordered hover variant="light" responsive="sm">
                <thead>
                  <tr className='text-center'>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th className='col-2'>Action</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                    {bookings.map((booking, index) => (
                    <tr key={booking.id}>
                    <td>{index + 1}</td>
                    <td>{booking.client_fullname}</td>
                    <td>{booking.client_email}</td>
                    <td>{booking.client_date}</td>
                    <td>
                    {statusLabels[booking.status] || 'New'}
                  </td>
                    {/* <td>{booking.status || 1 }</td> */}
                    <td>  
                        <Button className='m-1' variant="outline-info" size="sm" onClick={() => handleViewClick(booking)} >View</Button>
                        <Button  className='m-1' variant="outline-danger" size="sm">Delete</Button>{' '}
                    </td>
                  </tr>
                ))}
                </tbody>
              </Table>
              </div>
          </Card>
      </Container>

      {selectedBooking && (
        <Modal show={!!selectedBooking} onHide={() => setSelectedBooking(null)}
      >
          <Modal.Header closeButton>
            <Modal.Title>Client Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
          <Form.Group className="mb-0">
            <Form.Label for="fullName"><strong>Full Name:</strong></Form.Label>
            <Form.Control type="text" id="fullName" name="fullName" value={selectedBooking.client_fullname} readonly />
          </Form.Group>

          <Form.Group className="mb-0">
            <Form.Label for="email"><strong>Email:</strong></Form.Label>
            <Form.Control type="email" id="email" name="email" value={selectedBooking.client_email} readonly />
          </Form.Group>

          <Form.Group className="mb-0">
            <Form.Label for="service"><strong>Service:</strong></Form.Label>
            <Form.Control type="text" id="service" name="service" value={selectedBooking.client_service} readonly />
          </Form.Group>
          
          <Form.Group className="mb-0">
            <Form.Label for="technician"><strong>Technician:</strong></Form.Label>
            <Form.Control type="text" id="technician" name="technician" value={selectedBooking.client_technician} readonly />
          </Form.Group>

          <Form.Group className="mb-0">
            <Form.Label for="serviceDate"><strong>Service Date:</strong></Form.Label>
            <Form.Control type="text" id="serviceDate" name="serviceDate" value={selectedBooking.client_date} readonly />
          </Form.Group>

          <Form.Group className="mb-0">
            <Form.Label for="serviceTime"><strong>Service Time:</strong></Form.Label>
            <Form.Control type="text" id="serviceTime" name="serviceTime" value={selectedBooking.client_time} readonly />
          </Form.Group>

          <Form.Group className="mb-0">
            <Form.Label for="specialRequest"><strong>Special Request:</strong></Form.Label>
            <Form.Control as='textarea' id="specialRequest" name="specialRequest" readonly>{selectedBooking.client_request}</Form.Control>
          </Form.Group>

          <Form.Group className="mb-0">
            <Form.Label for="specialRequest"><strong>Status:</strong></Form.Label>
            <Form.Select  value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value={1}>On Progress</option>
              <option value={2}>Done</option>
              <option value={3}>Ready for pick-up</option>
            </Form.Select>
          </Form.Group>
        </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant='primary' onClick={handleStatusUpdate}>
            Update Status
          </Button>
        </Modal.Footer>
        </Modal>
      )}
    </div>     
       
  );
}

export default ClientInfo;
