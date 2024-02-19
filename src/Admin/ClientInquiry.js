import { useState, useEffect } from 'react';
import { Card, Container, Table, Button, Spinner, Modal, Form } from 'react-bootstrap'
import NavbarAdmin from './AdComp/NavbarAdmin';


const ClientInquiry = ({Toggle}) => {

    const [userMessage, setuserMessage] = useState([]);

    const [clientEmail, setClientemail] = useState('');
    const [clientMessage, setClientmessage] = useState('');

    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    // Function to close the modal
    const closeModal = () => {
      setIsModalOpen(false);
    };

    // Function to handle sending a reply
  const sendReply = async () => {
    // Add logic to send the reply (e.g., using an API call)
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any additional headers if needed
        },
        body: JSON.stringify({
          // Add the data you want to send in the reply
          message: 'This is a reply message',
        }),
      });

      if (response.ok) {
        console.log('Reply sent successfully');
        // After sending, you might want to close the modal
        closeModal();
      } else {
        console.error('Failed to send reply');
        // Handle error cases here
      }
    } catch (error) {
      console.error('Error while sending reply:', error);
      // Handle network errors here
    }
  };
  


    useEffect(() => {
        const fetchClientMessages  = async () => {
          try {
            const response = await fetch('http://localhost:5000/client-message'); // Replace with your API endpoint
            if (response.ok) {
              const data = await response.json();
              setuserMessage(data);
            } else {
              console.error('Failed to fetch user data');
            }
          } catch (error) {
            console.error('Error during fetch:', error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchClientMessages();
      }, []);

      


      // const handleReply = async (id) => {
      //   try {
      //     // Assuming you have an API endpoint for updating client messages
      //     const response = await fetch(`http://localhost:5000/update-client-message/${id}`, {
      //       method: 'PUT',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       // You may need to pass the updated data in the body
      //       body: JSON.stringify({ ClientInquiry}),
      //     });
    
      //     if (response.ok) {
      //       // Handle successful update (if needed)
      //       console.log('Client message updated successfully');
      //     } else {
      //       console.error('Failed to update client message');
      //     }
      //   } catch (error) {
      //     console.error('Error during update:', error);
      //   }
      // };

  return (

    <div>
    <NavbarAdmin Toggle={Toggle}/>
        <Container fluid>
            <Card className='border-1'>
                <Card.Header>
                    <h5 className='card-tittle'>Client Inquiry List</h5>
                    {loading ? (
                      <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                      </Spinner>
                    ) : (
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
                        {userMessage.map((ClientInquiry, index) => (
                        <tr key={ClientInquiry.id}>
                            <td>{index + 1}</td>
                            <td>{ClientInquiry.clientFullname}</td>
                            <td>{ClientInquiry.clientEmail}</td>
                            <td><textarea className='col-12' readOnly>{ClientInquiry.clientMessage}</textarea></td>
                            <td>
                            <Button variant="primary" onClick={openModal}>
                                reply
                            </Button>
                            </td>
                        </tr>
                        ))}
                        </tbody>
                    </Table>
                    )}
                </Card.Header>
            </Card>
        </Container>

        <Modal isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Reply Modal">
        <Modal.Header closeButton>
          <Modal.Title>Adding New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body> 

        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>TO:</Form.Label>
          <Form.Control required type="test" value={clientEmail} onChange={ (e)=>{ setClientemail(e.target.value) }} placeholder="Enter Item Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" value={clientMessage} onChange={ (e)=>{ setClientmessage(e.target.value) } } rows={3} />
        </Form.Group>
        </Form>
        
        </Modal.Body>
        <Modal.Footer>

        <button onClick={sendReply}>Send Reply</button>
        <button onClick={closeModal}>Close Modal</button>
        </Modal.Footer>
      </Modal>
    </div>
       
  )
}

export default ClientInquiry