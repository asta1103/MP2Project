import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import NavbarAdmin from './AdComp/NavbarAdmin';




const Profile = ({Toggle}) => {

    const [userProf, setuserProf] = useState({
        firstName: '',
        lastName: '',
        position: '',
        address: '',
        userEmail: '',
        phoneNumber: '',
        birthday: '',
      });

      useEffect(() => {
        // Make an HTTP GET request to retrieve the recent profile data
        fetch('http://localhost:5000/allProfile')
          .then((response) => response.json())
          .then((data) => setuserProf(data))
          .catch((error) => console.error('Error fetching recent profile:', error));
      }, []);

      

      const handleProfileSubmit = async (e) => {
        e.preventDefault();
        // Make an HTTP POST request to update the profile data
        try {
          const response = await fetch('http://localhost:5000/updateProfile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userProf),
          });
    
          if (response.ok) {
            console.log('Profile updated successfully');
            // Optionally, you can update the UI or show a success message
          } else {
            console.error('Failed to update profile');
            // Handle the error, show an error message, or perform other actions
          }
        } catch (error) {
          console.error('Error updating profile:', error);
        }
      };


  return (
    <div>
        <NavbarAdmin Toggle={Toggle} />
        <Container fluid>
        <Col xl={12}>
            <Card className='mb-4'>
            <Card.Header>Edit Profile</Card.Header>
                <Card.Body>
                <Form onSubmit={handleProfileSubmit}>
                    <div className='row gx-3 mb-3'>
                        <div className='col-md-6'>
                            <Form.Label className='small mb-1'>First Name</Form.Label>
                            <Form.Control type='text'
                            value={userProf.firstName}
                            onChange={(e) => setuserProf(e.target.value)}
                            required 
                            />
                        </div>
                        <div className='col-md-6'>
                            <Form.Label className='small mb-1'>Last Name</Form.Label>
                            <Form.Control type='text'
                            value={userProf.lastName}
                            onChange={(e) => setuserProf(e.target.value)}
                            required
                            />
                        </div>
                        <div className='col-md-6'>
                            <Form.Label className='small mb-1'>Position</Form.Label>
                            <Form.Control type='text'
                             value={userProf.position}
                             onChange={(e) => setuserProf(e.target.value)}
                             required
                             />
                        </div>
                        <div className='col-md-6'>
                            <Form.Label className='small mb-1'>Address</Form.Label>
                            <Form.Control type='text'
                             value={userProf.address}
                             onChange={(e) => setuserProf(e.target.value)}
                             required
                             />
                        </div>
                        </div>
                        <div class="mb-3">
                            <Form.Label className='small mb-1'>Email</Form.Label>
                            <Form.Control 
                             type='email'
                             value={userProf.userEmail}
                            readOnly // Assuming email is not editable in the profile page
                            required
                            />
                        </div>
                     <div className='row gx-3 mb-3'>
                         <div className='col-md-6'>
                            <Form.Label className='small mb-1'>Phone Number</Form.Label>
                            <Form.Control type='tel'
                             value={userProf.phoneNumber}
                             onChange={(e) => setuserProf(e.target.value)}
                             required
                             />
                        </div>
                        <div className='col-md-6'>
                            <Form.Label className='small mb-1'>Birthday</Form.Label>
                            <Form.Control type='date'
                             value={userProf.birthday}
                             onChange={(e) => setuserProf(e.target.value)}
                             required
                             />
                        </div>
                    </div>
                        <Button className='btn-secondary' type='submit'>Update Changes</Button>
                </Form>
                </Card.Body>
            </Card>
        </Col>
        </Container>
    </div> 
  )
}

export default Profile