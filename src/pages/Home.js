import React from 'react';
import './home.css';
import ServicesBtn from '../Components/ServicesBtn';
import {Carousel, Container, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactInfo from '../Components/ContactInfo';
import Carousel1 from '../utils/img/Car1.jpeg';
import Car2 from '../utils/img/Car2.jpg';
import Car3 from '../utils/img/Car3.jpeg';
import  ContactImage  from '../utils/img/contact.jpeg';
import  Tech1 from '../utils/img/Team1.jpg';
import Tech2 from '../utils/img/Team2.jpg';
import Tech3 from '../utils/img/Team3.jpg';
import Tech4 from '../utils/img/Team4.jpg';
import AboutImg from '../utils/img/About.jpeg';


const Home = () => {
  return (

    <div>
      <Carousel fade>
          <Carousel.Item interval={1000}>
            <img 
            className='d-block w-100'
            src= {Carousel1}
            alt='First slide'
            />
          <Carousel.Caption className='bg-dark bg-opacity-75'>
            <Container>
              <h1>Car Servicing</h1>
              <h3>Auto Service, Maintenance and Repair</h3>
            </Container>
          </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={500}>
          <img 
            className='d-block w-100'
            src= {Car2}
            alt='Second slide'
            />
        
            <Carousel.Caption className='bg-dark bg-opacity-75'>
              <h1>Car Servicing</h1>
              <h3>Your vehicle is in safe hands</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img 
            className='d-block w-100'
            src={Car3}
            alt='Third slide'
            />
            <Carousel.Caption className='bg-dark bg-opacity-75'>
              <h1>Car Servicing</h1>
              <h3>
               Performance Without compromise
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        <div className='container my-5'>
                <div className='row'>
                    <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
                        <img src={AboutImg} className='img-fluid w-100 h-auto' alt="about img"  />
                    </div>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
                        <h2 className='fs-1 mb-5 text-uppercase fw-bold'>About Us</h2>
                        <p>We offer a full range of garage services to vehicle owners located in Manila area. All mechanic services are performed by highly qualified mechanics. We can handle any car problem.</p>
                        <p className='mb-5'>If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have found it.</p>
                        <Link to="/about">
                            <button type='button' className='btn btn-outline-dark btn-lg'>More About Us</button>
                        </Link>
                    </div>
                </div>
            </div>


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


        <div className='py-5 team4'>
          <Container>
            <Row className='justify-content-center mb-4'>
              <div className='col-md-7 text-center'>
                <h3 className='mb-3'>Meet Our Team</h3>
                <h6 className='subtitle'>We are a friendly, helpful and professional group of people. Our professionals know how to handle a wide range of car services.</h6>
              </div>
            </Row>
            <Row>
            <div className='col-lg-3 mb-4'>
              <Row>
                <div className='col-md-12 d-flex flex-column'>
                  <img src= {Tech1} alt='' className='img-fluid rounded-circle h-auto'/>
                </div>
                <div  className='col-md-12 text-center'>
                  <div className='pt-2'>
                    <h5 className='mt-4 font-weight-medium mb-0'>Karl Smith</h5>
                    <h6 className='subtittle mb-3'>Worker</h6>
                  </div>
                </div>
              </Row>
            </div>
            <div className='col-lg-3 mb-4'>
              <Row>
                <div className='col-md-12'>
                  <img src= {Tech2} alt='' className='img-fluid rounded-circle h-auto'/>
                </div>
                <div  className='col-md-12 text-center'>
                  <div className='pt-2'>
                    <h5 className='mt-4 font-weight-medium mb-0'>Karl Smith</h5>
                    <h6 className='subtittle mb-3'>Worker</h6>
                  </div>
                </div>
              </Row>
            </div>
            <div className='col-lg-3 mb-4'>
              <Row>
                <div className='col-md-12'>
                  <img src= {Tech3} alt='' className='img-fluid rounded-circle h-auto'/>
                </div>
                <div  className='col-md-12 text-center'>
                  <div className='pt-2'>
                    <h5 className='mt-4 font-weight-medium mb-0'>Karl Smith</h5>
                    <h6 className='subtittle mb-3'>Worker</h6>
                  </div>
                </div>
              </Row>
            </div>
            <div className='col-lg-3 mb-4'>
              <Row>
                <div className='col-md-12'>
                  <img src= {Tech4} alt='' className='img-fluid rounded-circle h-auto'/>
                </div>
                <div  className='col-md-12 text-center'>
                  <div className='pt-2'>
                    <h5 className='mt-4 font-weight-medium mb-0'>Karl Smith</h5>
                    <h6 className='subtittle mb-3'>Worker</h6>
                  </div>
                </div>
              </Row>
              </div>
            </Row>
          </Container>
        </div>

        <div className='contact-section bg-dark text-light py-3 shadow'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                            <ContactInfo />
                        </div>
                        <div className='col-sm-8 d-flex justify-content-center'>
                            <img src={ContactImage} className='img-fluid w-50 h-auto' alt="" />
                        </div>
                    </div>
                </div>
            </div>
    </div>
   
  );
};

export default Home