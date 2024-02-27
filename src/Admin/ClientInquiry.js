import { useState, useEffect } from 'react';
import { Card, Container, Table, Button, Spinner, Modal, Form } from 'react-bootstrap';


const ClientInquiry = () => {
  const [userMessage, setUserMessage] = useState([]);
  const [clientEmail, setClientEmail] = useState('');
  const [clientMessage, setClientMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState(null);

  const openModal = (email, messageId) => {
    setClientEmail(email);
    setSelectedClientId(messageId);
    setShowModal(true);
  };

  const closeModal = () => {
    setClientEmail('');
    setClientMessage('');
    setSelectedClientId(null);
    setShowModal(false);
  };

  const sendReply = async () => {
    try {
      const response = await fetch(`http://localhost:5000/send-reply/${selectedClientId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: clientEmail,
          message: clientMessage,
        }),
      });

      if (response.ok) {
        console.log('Admin reply:', clientMessage);
        closeModal();
      } else {
        console.error('Failed to send reply');
      }
    } catch (error) {
      console.error('Error while sending reply:', error);
    }
  };

  useEffect(() => {
    const fetchClientMessages = async () => {
      try {
        const response = await fetch('http://localhost:5000/client-message');
        if (response.ok) {
          const data = await response.json();
          setUserMessage(data);
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

  return (
    <div>
      <Container fluid>
        <Card className='border-1'>
          <Card.Header>
            <h5 className='card-tittle'>Client Inquiry List</h5>
            {loading ? (
              <Spinner animation='border' role='status'>
                <span className='sr-only'>Loading...</span>
              </Spinner>
            ) : (
              <Table striped bordered hover variant='light' responsive='sm'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Fullname</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userMessage.map((client, index) => (
                    <tr key={client.id}>
                      <td>{index + 1}</td>
                      <td>{client.clientFullname}</td>
                      <td>{client.clientEmail}</td>
                      <td>
                        <textarea className='col-12' readOnly>
                          {client.clientMessage}
                        </textarea>
                      </td>
                      <td>
                        <Button variant='primary' onClick={() => openModal(client.clientEmail, client.id)}>
                          Reply
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

      <Modal show={showModal} onHide={closeModal} contentLabel='Reply Modal'>
        <Modal.Header closeButton>
          <Modal.Title>Send Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>To:</Form.Label>
              <Form.Control type='email' value={clientEmail} readOnly />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
              <Form.Label>Message:</Form.Label>
              <Form.Control as='textarea' value={clientMessage} onChange={(e) => setClientMessage(e.target.value)} rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={sendReply}>
            Send Reply
          </Button>
          <Button variant='secondary' onClick={closeModal}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ClientInquiry;
