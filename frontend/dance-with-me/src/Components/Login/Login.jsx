import React, { useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router';

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submitForm() {
    axios
      .post('http://localhost:3000/users/login', { email, password })
      .then(e => {
        if (e.data.token) {
          localStorage.setItem('token', e.data.token);
          localStorage.setItem('ID', e.data.user.id);
          setLoggedIn(true);
          //console.log(e.data.token);
        } else {
          setLoggedIn(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = p => {
    setPassword(p.target.value);
  };
  return (
    <>
    {loggedIn ? (<Redirect to="_________" />): // we need frontend route here
    <div>
      <Button variant="primary" onClick={handleShow}>
        Login
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
              <Form.Control type="email" placeholder="Enter email" required onChange={handleEmailChange} value={email} />
              <Form.Text className="text-muted">
                   We’ll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required onChange={handlePasswordChange} value={password} />
              </Form.Group>
          <Button variant="primary" type="submit"> Submit
          </Button>
        </Form>
           </Modal.Body>
      </Modal>
      </div>}
    </>
  );
}
export default Login;