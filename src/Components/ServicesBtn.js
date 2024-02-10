import React from 'react'
import { Link } from 'react-router-dom'

const ServicesBtn = () => {
  return (
    <div>
        <Link to="/service">
                <button type="button" className="btn btn-dark btn-lg">Our Full Services</button>
            </Link>
    </div>
  )
}

export default ServicesBtn