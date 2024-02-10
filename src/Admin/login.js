import React from 'react'
import '../Admin/login.css';
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-secondary'>
        <div className='form_container p-5 rounded bg-white'>
            <Form>
                <h3 className='text-center'>Sign In</h3>
                <Form.Group className='mb-2'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter Email'/>
                </Form.Group>
                <Form.Group className='mb-2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter Password'/>
                </Form.Group>

                <div className='d-grid'>
                    <Button className='btn-primary'>Log In</Button>
                </div>
                <p className='text-center mt-2'>Don't have an Acount yet?<Link to='/signup'  className='ms-2'>Sign Up</Link></p>
            </Form>
        </div>
    </div>
  )
}

export default Login