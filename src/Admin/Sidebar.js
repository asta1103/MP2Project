import React from 'react'
import {CarFrontFill, ListTask, InfoCircle, EnvelopeAt, PeopleFill, PersonCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (

    <div className='bg-white p-2'>
      <div className='m-2'>
        <CarFrontFill className='me-3 fs-3'/>
        <span className='brand-name fs-4'>JGarage</span>
      </div>
      <hr className='text-dark'/>
      <div className='list-group list-group-flush'>
        <Link to='/admin' className='list-group-item py-2'>
          <ListTask className='fs-5 me-3'/>
          <span className='fs-5'>Dashboard</span>
        </Link>
        <Link to='/client' className='list-group-item py-2'>
          <InfoCircle className='fs-5 me-3'/>
          <span className='fs-5'>Client List</span>
        </Link>
        <Link to='/inquiry' className='list-group-item py-2'>
          <EnvelopeAt className='fs-5 me-3'/>
          <span className='fs-5'>Client Inquiry</span>
        </Link>
        <Link to='/profile' className='list-group-item py-2'>
          <PersonCircle className='fs-5 me-3'/>
          <span className='fs-5'>Profile</span>
        </Link>
        <Link to='/user' className='list-group-item py-2'>
          <PeopleFill className='fs-5 me-3'/>
          <span className='fs-5'>User</span>
        </Link>

      </div>
    </div>



  )
}

export default Sidebar