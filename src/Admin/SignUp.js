import React from 'react'
import '../Admin/login.css';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const SignUp = () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-secondary'>
        <div className='form_container p-5 rounded bg-white'>
            <Form>
                <h3 className='text-center'>Sign Up</h3>
                <Form.Group className='mb-2'>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter Full Name'/>
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter Email'/>
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Password'/>
                </Form.Group>

                <div className='d-grid'>
                    <Button className='btn-primary'>Sign Up</Button>
                </div>
                <p className='text-center mt-2'>Already have an  Acount?<Link to='/login' className='ms-2'>Log in</Link></p>
            </Form>
        </div>
    </div>
    
  )
}

export default SignUp