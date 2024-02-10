import React from 'react'
import '../Admin/admin.css';
import { Button, Card, Col, Nav, Row } from 'react-bootstrap';
import { ListTask, InfoCircle, EnvelopeAt, PeopleFill } from 'react-bootstrap-icons';
import Avatar from '../utils/img/Avatar.jpeg';



const Admin = () => {
  return (
    <div className='wrapper'>
      <aside id='sidebar' className='js-sidebar'>
        <div className='h-100'>
          <div className='sidebar-logo'>
            <a href='/'>JGarage.</a>
          </div>
          <ul className='sidenav-nav'>
            <li className='sidebar-header'>
              Admin Elements
            </li>
            <li className='sidebar-item'>
              <a href='#main' className='sidebar-link'>
                <ListTask className='pe-2 m-2 fs-3'/>
                Dashboard
              </a>
            </li>
            <li className='sidebar-item'>
              <a href= '#main' className='sidebar-link'>
                <InfoCircle className='pe-2 m-2 fs-3'/>
                Client Info
              </a>
            </li>
            <li className='sidebar-item'>
              <a href='#posts' className='sidebar-link'>
                <EnvelopeAt className='pe-2 m-2 fs-3'/>
                Client Inquiry
              </a>
            </li>
            <li className='sidebar-item'>
              <a href='#auth' className='sidebar-link'>
                <PeopleFill className='pe-2 m-2 fs-3'/>
                User Management
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className='main'>
        <Nav className='navbar navbar-expand px-3 border-bottom'>
          <Button className='btn' id='sidebar-toggle' type='button'>
            <span className='navbar-toggle-icon'></span>
          </Button>
          <div className='navbar-collapse navbar'>
            <ul className='navbar-nav'>
              <li className='nav-item dropdown'>
                <a  data-bs-toggle='dropdown' id='menulink' href='#profile' className='nav-icon pe-md-0 d-flex align-item-center dropdown-toggle' role='button' aria-expanded='false'>
                  <img src={Avatar} className='avatar img-fluid rounded h-auto' alt=''/>
                </a>
                <div className='dropdown-menu dropdown-menu-end' id='profile' aria-labelledby='menulink'>
                  <li>
                  <a  class="dropdown-item" href="/">Profile</a>
                  </li>
                  <li>
                  <a class="dropdown-item" href="/" >Setting</a>
                  </li>
                  <li>
                  <a  class="dropdown-item" href="/">Logout</a>
                  </li>
                </div>
              </li>
            </ul>
          </div>
        </Nav>
        
        <main className='content px-3 py-2'>
          <div className='container-fluid'>
            <div className='mb-3'>
              <h4>Admin Dasboard</h4>
            </div>
            <Row>
              <Col Col={12} md={6} className='d-flex'>
                <Card className='flex-fill border-0 illustration'>
                  <Card.Body className='p=0 d-flex flex-fill'>
                    <Row className='g-0 w-100'>
                      <div className='col-6'>
                        <div className='p-3 m-1'>
                          <h4>Welcome, Admin</h4>
                          <p className='mb-0'>Admin Dasboard</p>
                        </div>
                      </div>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col Col={12} md={6} className='d-flex'>
                <Card className='flex-fill border-0'>
                  <Card.Body className='py-4'>
                    <div className='d-flex align-items-start'>
                      <div className='flex-grow-1'>
                        <h4 className='mb-2'>PHP 78,000.00</h4>
                        <p className='mb-2'>Total Earnings</p>
                        <div className='mb-0'>
                          <span className='badge text-success me-2'>+7.8%</span>
                          <span className='text-muted'>Since Last Month</span>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Card className='boder-0'>
              <Card.Header>
                <h5 className='card-tittle'>Client Table</h5>
                <h6 className='card-subtitle text-muted'>
                  kjflksdfksdfklsdsdlkfok;kls;dmdlmllds;dmdslf;sld
                </h6>
              </Card.Header>
              <Card.Body>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Client ID</th>
                      <th scope='col'>Full Name</th>
                      <th scope='col'>Email</th>
                      <th scope='col'>Service</th>
                      <th scope='col'>Technician</th>
                      <th scope='col'>Date</th>
                      <th scope='col'>Time</th>
                      <th scope='col'>Request</th>
                      <th scope='col'>Status</th>
                      <th scope='col'>Notes</th>
                    </tr>
                  </thead>
                </table>
              </Card.Body>
              <tbody>
              <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
              </tr>
              <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
              </tr>
              <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
              </tr>
              </tbody>
            </Card>
          </div>
        </main>
        <footer className='footer'>
          <div className='container-fluid'>
            <div className='row text-muted'>
              <div className='col-6 text-start'>
                <p className='mb-0'>
                  <a href='/' className='text-muted'>
                    <strong>JGarage</strong>
                  </a>
                </p>
              </div>
              <div className='col-6 text-end'>
                <ul className='list-inline'>
                  <li className='list-inline-item'>
                    <a href='/' className='text-muted'>Contact</a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='/' className='text-muted'>Contact</a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='/' className='text-muted'>Contact</a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='/' className='text-muted'>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Admin