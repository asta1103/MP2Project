import React from 'react';
import './service.css';
import { CardBody, CardText, CardTitle, Card } from 'react-bootstrap';
import JdmImg from '../utils/img/Jdm.jpeg';
import BodyColImg from '../utils/img/Body.jpeg';
import PaintImg from '../utils/img/Paint1.jpeg';
import DentImg from '../utils/img/Dant.jpeg';



const jdmData = [
  {
      id: 1,
      name: 'Custom Aftermarket Installation',
      description: 'Interested in aftermarket parts installation on your new car or that project car you just can’t seem to finish? Let us know what you need done and see if we are able to help. Projects are taken on a case-by-case basis, so please be sure to contact us for more information, estimates and scheduling availability.',
      price: 'range 10,000-30,000'
  },
  {
      id: 2,
      name: 'Auto Body Collision Repair',
      description: 'We seek to provide the highest level of service and quality of repairs as possible. That is why we have invested in factory training and certifications. Our body, frame and mechanical technicians have the tools and technology to perform the highest level of repairs to your vehicle. You can rest assured that your vehicle is in safe hands with JGarage.',
      price: 'range 20,000-50,000'
  },
  {
      id: 3,
      name: 'Auto Paint and Refinishing',
      description: 'With the use of computerized paint matching systems, we can take the paint code off of your vehicle and our highly trained technicians can match the paint on your car flawlessly. Our goal is to make your car look like it was never in an accident.',
      price: 'range 15,000-25,000'
  }
];
const BodyColData = [
  {
    id: 1,
    name: 'Auto Body Collision Repair',
    description: 'We seek to provide the highest level of service and quality of repairs as possible. That is why we have invested in factory training and certifications. Our body, frame and mechanical technicians have the tools and technology to perform the highest level of repairs to your vehicle. You can rest assured that your vehicle is in safe hands with JGarage.',
    price: 'range 20,000-50,000'
  },
  {
    id: 2,
    name: 'Auto Body Collision Repair',
    description: 'We seek to provide the highest level of service and quality of repairs as possible. That is why we have invested in factory training and certifications. Our body, frame and mechanical technicians have the tools and technology to perform the highest level of repairs to your vehicle. You can rest assured that your vehicle is in safe hands with JGarage.',
    price: 'range 20,000-50,000'
  },
  {
    id: 3,
    name: 'Auto Body Collision Repair',
    description: 'We seek to provide the highest level of service and quality of repairs as possible. That is why we have invested in factory training and certifications. Our body, frame and mechanical technicians have the tools and technology to perform the highest level of repairs to your vehicle. You can rest assured that your vehicle is in safe hands with JGarage.',
    price: 'range 20,000-50,000'
  }
];

const PaintData = [
  {
    id: 1,
    name: 'Auto Paint and Refinishing',
    description: 'With the use of computerized paint matching systems, we can take the paint code off of your vehicle and our highly trained technicians can match the paint on your car flawlessly. Our goal is to make your car look like it was never in an accident.',
    price: 'range 15,000-25,000'
  },
  {
    id: 2,
    name: 'Auto Paint and Refinishing',
    description: 'With the use of computerized paint matching systems, we can take the paint code off of your vehicle and our highly trained technicians can match the paint on your car flawlessly. Our goal is to make your car look like it was never in an accident.',
    price: 'range 15,000-25,000'
  },
  {
    id: 3,
    name: 'Auto Paint and Refinishing',
    description: 'With the use of computerized paint matching systems, we can take the paint code off of your vehicle and our highly trained technicians can match the paint on your car flawlessly. Our goal is to make your car look like it was never in an accident.',
    price: 'range 15,000-25,000'
  }
];

const DentData = [
  {
      id: 1,
      name: 'Glass and Paintless Dent Repair',
      description: 'Whether it is your windshield or driverside door glass we can assist you with all your glass replacement needs. We can replace your glass and clean up the unwanted mess all at one of our convenient facilities. The important thing is to get you back on the road as quickly as possible. Simply call or set up an appointment online to have your vehicle repaired today!',
      price: '8,000-18-000'
  },
  {
    id: 2,
    name: 'Glass and Paintless Dent Repair',
    description: 'Whether it is your windshield or driverside door glass we can assist you with all your glass replacement needs. We can replace your glass and clean up the unwanted mess all at one of our convenient facilities. The important thing is to get you back on the road as quickly as possible. Simply call or set up an appointment online to have your vehicle repaired today!',
    price: '8,000-18-000'
  },
  {
    id: 3,
    name: 'Glass and Paintless Dent Repair',
    description: 'Whether it is your windshield or driverside door glass we can assist you with all your glass replacement needs. We can replace your glass and clean up the unwanted mess all at one of our convenient facilities. The important thing is to get you back on the road as quickly as possible. Simply call or set up an appointment online to have your vehicle repaired today!',
    price: '8,000-18-000'
  }
];


const services = () => {
  return (
    <div className='service-page'>
    <header className='mt-5'>
        <div className='container h-100 d-flex justify-content-center align-item-center'>
            <h1 className='text-light'>Explore Our Services</h1>
        </div>
    </header>

    <div className='Jdm my-5'>
        <div className='container'>
            <div className='row flex-column-reverse flex-lg-row'>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={JdmImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                </div>
                <div className='col-lg-6 d-flex flex-column justify-content-around'>
                    {jdmData.map((jdmData) => (
                        <div key={jdmData.id}>
                            <Card className='border-0'>
                                <CardBody>
                                    <CardTitle className='text-center fs-6'>
                                        {jdmData.name}
                                    </CardTitle>
                                    <CardText className='text-center fs-6'>
                                        {jdmData.description}
                                    </CardText>
                                    <CardText className='text-center fs-6 fw-bold text-secondary'>
                                        {jdmData.price}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>

    <div className='BodyCol bg-dark  py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 d-flex flex-column justify-content-around'>
                    {BodyColData.map((BodyColData) => (
                        <div key={BodyColData.id}>
                            <Card className='border-0 bg-dark '>
                                <CardBody>
                                    <CardTitle className='text-center fs-6'>
                                        {BodyColData.name}
                                    </CardTitle>
                                    <CardText className='text-center fs-6'>
                                        {BodyColData.description}
                                    </CardText>
                                    <CardText className='text-center fs-6 fw-bold text-secondary'>
                                        {BodyColData.price}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={BodyColImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                </div>
            </div>
        </div>
    </div>

    <div className='Paint my-5'>
        <div className='container'>
            <div className='row flex-column-reverse flex-lg-row'>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={PaintImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                </div>
                <div className='col-lg-6 d-flex flex-column justify-content-around'>
                    {PaintData.map((PaintData) => (
                        <div key={PaintData.id}>
                            <Card className='border-0'>
                                <CardBody>
                                    <CardTitle className='text-center fs-6'>
                                        {PaintData.name}
                                    </CardTitle>
                                    <CardText className='text-center fs-6'>
                                        {PaintData.description}
                                    </CardText>
                                    <CardText className='text-center fs-6 fw-bold text-secondary'>
                                        {PaintData.price}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>

    <div className='Dent bg-dark py-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 d-flex flex-column justify-content-around'>
                    {DentData.map((DentData) => (
                        <div key={DentData.id}>
                            <Card className='border-0 bg-dark '>
                                <CardBody>
                                    <CardTitle className='text-center fs-6'>
                                        {DentData.name}
                                    </CardTitle>
                                    <CardText className='text-center fs-6'>
                                        {DentData.description}
                                    </CardText>
                                    <CardText className='text-center fs-6 fw-bold text-secondary'>
                                        {DentData.price}
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={DentImg} className='img-fluid w-75 mt-4 mt-lg-0' alt="" />
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default services