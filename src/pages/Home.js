import React from 'react';
import './home.css';
import ServicesBtn from '../Components/ServicesBtn';
import {Carousel} from 'react-bootstrap';

const home = () => {
  return (

    <div>
      <Carousel>
          <Carousel.Item interval={1000}>
            <img 
            className='d-block w-100'
            src='https://images.pexels.com/photos/9381013/pexels-photo-9381013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='First slide'
            />

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
          <img 
            className='d-block w-100'
            src='https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Second slide'
            />
        
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img 
            className='d-block w-100'
            src='https://images.pexels.com/photos/7019379/pexels-photo-7019379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Third slide'
            />
   
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        <div className='service-section py-5 text-light shadow'>
          <div className='container d-flex flex-column align-items-center'>
              <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Service</h2>
              <div className='row mb-5 w-100'>
                  <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                      <ul className='px-0'>
                          <li className='d-flex justify-content-between'>
                              <p className='fs-3 mx-2'>Custom Aftermarket Installation</p>
                          </li>
                          <li className='d-flex justify-content-between'>
                              <p className='fs-3 mx-2'>Auto Body Collision Repair</p>
                          </li>
                          <li className='d-flex justify-content-between'>
                              <p className='fs-3 mx-2'>Auto Paint and Refinishing</p>
                          </li>
                      </ul>
                  </div>
                  <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                      <ul className='px-0'>
                          <li className='d-flex justify-content-between'>
                              <p className='fs-3 mx-2'>Glass and Paintless Dent Repair</p>
                          </li>
                          <li className='d-flex justify-content-between'>
                              <p className='fs-3 mx-2'>Tire Rotation and Balance</p>
                          </li>
                          <li className='d-flex justify-content-between'>
                              <p className='fs-3 mx-2'>Electrical Services</p>
                          </li>
                      </ul>
                  </div>
              </div>
             <ServicesBtn/>
          </div>
        </div>
       
    </div>
   
  );
};

export default home