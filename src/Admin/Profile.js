import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import NavbarAdmin from './AdComp/NavbarAdmin';




const Profile = () => {

    const [userProf, setuserProf] = useState({})

      useEffect(() => {
        const storedUserProfile = JSON.parse(localStorage.getItem('userProfile'))
        setuserProf(storedUserProfile || {});
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
            window.alert('Profile updated successfully');
            console.log(userProf);
            // Optionally, you can update the UI or show a success message
           
          } else {
            console.error('Failed to update profile');
            // Handle the error, show an error message, or perform other actions
          }
        } catch (error) {
          console.error('Error updating profile:', error);
        }
      };

      const handleInputChange = (fieldName, value) => {
        setuserProf((prevUserProf) => ({
          ...prevUserProf,
          [fieldName]: value,
        }));
      };
    


  return (
    <div>
        <NavbarAdmin/>
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
                             value={userProf.firstname || ''}
                             onChange={(e) => handleInputChange('firstname', e.target.value)}
                             readOnly
                            />
                        </div>
                        <div className='col-md-6'>
                            <Form.Label className='small mb-1'>Last Name</Form.Label>
                            <Form.Control type='text'
                            value={userProf.lastname || ''}
                            onChange={(e) => handleInputChange('lastname', e.target.value)}
                            readOnly
                            />
                        </div>
                        <div className='col-md-6'>
                            <Form.Label className='small mb-1'>Position</Form.Label>
                            <Form.Control type='text'
                            value={userProf.position || ''}
                            onChange={(e) => handleInputChange('position', e.target.value)}
                             />
                        </div>
                        <div className='col-md-6'>
                            <Form.Label className='small mb-1'>Address</Form.Label>
                            <Form.Control type='text'
                             value={userProf.address || ''}
                             onChange={(e) => handleInputChange('address', e.target.value)}
                             />
                        </div>
                        </div>
                        <div class="mb-3">
                            <Form.Label className='small mb-1'>Email</Form.Label>
                            <Form.Control 
                             type='email'
                             value={userProf.email || ''}
                             onChange={(e) => handleInputChange('email', e.target.value)} 
                             readOnly
                            />
                        </div>
                     <div className='row gx-3 mb-3'>
                         <div className='col-md-6'>
                            <Form.Label className='small mb-1'>Phone Number</Form.Label>
                            <Form.Control type='tel'
                            value={userProf.phone || ''}
                            onChange={(e) => handleInputChange('phone', e.target.value)} 
                             />
                        </div>
                        <div className='col-md-6'>
                            <Form.Label className='small mb-1'>Birthday</Form.Label>
                            <Form.Control type='date'
                            value={userProf.birthday || ''}
                            onChange={(e) => handleInputChange('birthday', e.target.value)} 
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