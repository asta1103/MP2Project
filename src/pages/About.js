import React from 'react';
import './About.css';
import Reviews from '../Components/Reviews';
import About1 from '../utils/img/About1.jpeg';
import About2 from '../utils/img/About2.jpeg';

const About = () => {
  return (
    <div className='about-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>Why you Choose Us</h1>
                </div>
            </header>

            <div className='container my-5'>
                <p>JGarage Services is my owned business that has been operating for over 1103 years.
                    The success of our business within the years has been reflected among our professionalism in the automotive industry and honesty towards our client.
                    Our team are fully experienced and qualified mechanics that are very knowledgeable in most makes and models.
                    Our aim is to provide our customers with consistent affordable pricing and a 5 Star exceptional service.
                </p>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img src={About1} className='img-fluid my-4 h-auto' alt="" />
                    </div>
                    <div className='col-lg-6'>
                        <img src={About2} className='img-fluid my-4 h-auto' alt="" />
                    </div>
                </div>
            </div>


            <div className='my-5'>
                <Reviews />
            </div>
        </div>
  )
}

export default About