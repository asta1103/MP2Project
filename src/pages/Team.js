import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import '../pages/team.css'
import Team1 from '../utils/img/Team1.jpg'
import Team2 from '../utils/img/Team2.jpg'
import Team3 from '../utils/img/Team3.jpg'
import Team4 from '../utils/img/Team4.jpg'


const Team = () => {
  return (
    <Row className='row m-5 p-5'>
      <Col className='column'>
      <Card className='card'>
      <img src= {Team1} alt='team1' className='h-auto' />
      <Container className='container text-center p-3'>
        <h2>James Smith</h2>
        <p>Worker</p>
        <Button className='button'>Contact</Button>
      </Container>
      </Card>
      </Col>

      <Col className='column '>
      <Card className='card'>
      <img src= {Team2} alt='team1' className='h-auto' />
      <Container className='container text-center p-3'>
        <h2>James Smith</h2>
        <p>Worker</p>
        <Button className='button'>Contact</Button>
      </Container>
      </Card>
      </Col>

      <Col className='column'>
      <Card className='card'>
      <img src= {Team3} alt='team1' className='h-auto' />
      <Container className='container text-center p-3'>
        <h2>James Smith</h2>
        <p>Worker</p>
        <Button className='button'>Contact</Button>
      </Container>
      </Card>
      </Col>

      <Col className='column'>
      <Card className='card'>
      <img src= {Team4} alt='team1' className='h-auto' />
      <Container className='container text-center p-3'>
        <h2>James Smith</h2>
        <p>Worker</p>
        <Button className='button'>Contact</Button>
      </Container>
      </Card>
      </Col>
    </Row>
  )
}

export default Team