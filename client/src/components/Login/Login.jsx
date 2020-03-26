import React, { useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router';
import useInput from './use-input'

function Login(props) {
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const email = useInput('');
  const password = useInput('');
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submitForm() {
    axios
      .post('https://hyf-class6-dancewithme.herokuapp.com/api/users/login', { email: email.value, password:password.value})
      .then(e => {
       if (e.data.token) {
         alert("You have successfully logged in!")
          localStorage.setItem('token', e.data.token);
          localStorage.setItem('ID', e.data.user._id);
          setLoggedIn(true);
          } else {
          setLoggedIn(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <>
    {loggedIn ? (<Redirect to="/DanceWithMe" />): // we need frontend route here
    <div>
      <Button variant={props.color} onClick={handleShow}>
        {props.text}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton />
        <Modal.Body className>
        <Form onSubmit={e => {
                  e.preventDefault();
                  submitForm();
                }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                {...email}
              />
              <Form.Text className="text-muted">
                Your email will be kept in confidence.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password" 
                placeholder="Password" 
                {...password}
              />
              </Form.Group>
          <Button variant="primary" type="submit"> Submit
          </Button>
        </Form>
           </Modal.Body>
      </Modal>
      </div>
    }
    </>
  );
}
export default Login;