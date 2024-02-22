import React, { useState, useEffect } from 'react';
import { Card, Container, Table, Button, Spinner } from 'react-bootstrap';
import NavbarAdmin from './AdComp/NavbarAdmin';


const User = () => {
  const [addUser, setAddUser] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [currentUserEmail, setCurrentUserEmail] = useState(""); 

  useEffect(() => {
    const userprofile = async () => {
      try {
        const response = await fetch('http://localhost:5000/allProfile'); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setAddUser(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error during fetch:', error);
      } finally {
        setLoading(false);
      }
    };

    userprofile();
  }, []);

  // useEffect(() => {
  //   // Retrieve the current user's email from localStorage or your authentication state
  //   const loginUser = localStorage.getItem('userEmail');
  //   setCurrentUserEmail(loginUser);
  // }, []);

  const deleteItem = async (userId, userEmail) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/delete-userProfile/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Update the users state after successful deletion
        setAddUser((prevUsers) => prevUsers.filter((user) => user.id !== userId));

        // if (userEmail === currentUserEmail) {
        //   logoutUser();
        // }
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error during delete:', error);
    }
  };

  // const logoutUser = () =>{
  //   localStorage.removeItem('userEmail');
  //   window.location.href = '/login';
  // }

  return (
    <div>
      <NavbarAdmin />
      <Container>
        <Card className='border-1'>
          <Card.Header>
            <h5 className='card-title'>Users List</h5>
            {loading ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (

            <Table striped bordered hover variant="light" responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {addUser.map((userprofile, index) => (
                  <tr key={userprofile.id}>
                    <td>{index + 1}</td>
                    <td>{userprofile.firstname}</td>
                    <td>{userprofile.lastname}</td>
                    <td>{userprofile.email}</td>
                    <td>
                      <Button variant="danger" onClick={() => deleteItem(userprofile.id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            )}
          </Card.Header>
        </Card>
      </Container>
    </div>
  );
};

export default User;
