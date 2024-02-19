import React, { useState } from 'react';
import '../Admin/login.css';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const SignUp = () => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
 

  const navigate = useNavigate();

  const registrationSubmit = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password) {
        setErrorMessage('Please fill in all fields');

        setTimeout(() => {
            setErrorMessage('');
          }, 3000);

        return;
      }

    const userProfile = {
      firstname,
      lastname,
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userProfile),
      });

      if (response.ok) {
        console.log('Registration successful', userProfile);
        navigate('/login');
      } else {
        const responseData = await response.json();

        if (response.status === 409) {
          setErrorMessage('Registration failed - Email already in use');
        } else {
          console.error('Registration failed:', responseData.message);
          setTimeout(() => {
            setErrorMessage('');
          }, 3000);

        }
      }
    } catch (error) {
        setErrorMessage('Error during registration. Please try again later.');
        console.error('Error during registration:', error);

        setTimeout(() => {
            setErrorMessage('');
          }, 3000);
    }
  };

  



  return (
    <div className='signup template d-flex justify-content-center align-items-center 100-w vh-100 bg-secondary'>
      <div className='form_container p-5 rounded bg-white'>

        <Form onSubmit={registrationSubmit}>
          <h3 className='text-center'>Sign Up</h3>
          <Form.Group className='mb-2'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter First Name'
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-2'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Last Name'
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-2'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {errorMessage && (
            <div className='alert alert-danger p-1 text-center' role='alert'>
              {errorMessage}
            </div>
          )}

          <div className='d-grid'>
            <Button className='btn-primary' type='submit'>
              Sign Up
            </Button>
          </div>
          <p className='text-center mt-2'>
            Already have an account? <Link to='/login'>Log in</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
