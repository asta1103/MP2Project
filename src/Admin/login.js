import React, { useEffect, useState } from 'react';
import '../Admin/login.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login-validation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log('Login successful:', data);
        localStorage.setItem('userProfile', JSON.stringify(data.loginUser));

        navigate('/admin');
      } else {
      
        setError(data.msg || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setError('Error during login. Please try again.');
    }
  };

  useEffect(() => {
    console.log('im monitoring login');
  }, []);

  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-secondary'>
      <div className='form_container p-5 rounded bg-white'>
        <Form onSubmit={handleLogin}>
          <h3 className='text-center'>Sign In</h3>
          <Form.Group className='mb-2'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='text' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group className='mb-4'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>

          {error && (
            <div className='alert alert-danger p-1 text-center' role='alert'>
              {error}
            </div>
          )}

    
          <div className='d-grid'>
            <Button className='btn-primary' type='submit'>
              Log In
            </Button>
          </div>
          <p className='text-center mt-2'>
            Don't have an Account yet?<Link to='/signup' className='ms-2'>
              Sign Up
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
