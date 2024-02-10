import React from 'react'
import './Reviews.css';
import { Card, CardBody, CardText, CardFooter, CardTitle } from 'react-bootstrap';
import Person1 from '../utils/img/Person1.jpeg';
import Person2 from '../utils/img/Person2.jpeg';
import Person3 from '../utils/img/Person3.jpeg';
import Person4 from '../utils/img/person4.jpeg';


const Reviews = () => {
  return (
    <div className="reviews-section container">
            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                     Always a great experience with JGarage! They take good care of my car and turn it around quickly.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person1} className="img-fluid rounded-circle mx-3 shadow h-100" alt="" />
                            <CardTitle className="text-secondary">May Reyes</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                    Honest, efficient, and prompt service always. Great local auto repair shop. Would highly, highly recommend.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person2} className="img-fluid rounded-circle mx-3 shadow h-100" alt="" />
                            <CardTitle className="text-secondary">John Cruz</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                Prompt, honest and good people to work with. Always reasonable prices with the great job that was done on my vehicle.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person3} className="img-fluid rounded-circle mx-3 shadow h-100" alt="" />
                            <CardTitle className="text-secondary">Kris Gomez </CardTitle>
                        </CardFooter>
                    </Card>
                </div>
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <div className="p-4">
                                <CardText>
                                Good, honest mechanics! They always get me in quickly, the prices are great, and the waiting area is really nice and comfy. Definitely the nicest auto shop I’ve ever been to.
                                </CardText>
                            </div>
                        </CardBody>
                        <CardFooter className="d-flex align-items-center">
                            <img src={Person4} className="img-fluid rounded-circle mx-3 shadow h-100" alt=""/>
                            <CardTitle className="text-secondary">Nick Jonas</CardTitle>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
  )
}

export default Reviews