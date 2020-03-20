import React, { useState } from 'react';
import { Modal, Button, Form, } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router';


function SignUp() {
  const [show, setShow] = useState(false);
  
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [singedUp, setSingedUp] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleSurNameChange = e => {
    setSurName(e.target.value);
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

   function submitForm() {
     axios
       .post('http://localhost:5000/users', {name, surname, email, password })
       .then(e => {
         console.log(e.data)
         if (e.data.token) {
           localStorage.setItem('token', e.data.token);
           localStorage.setItem('ID', e.data.user.id);
           setSingedUp(true);
           console.log(e.data.token);
         } else {
           setSingedUp(false);
         }
       })
       .catch(err => {
         console.log(err);
       });
   }
  return (
    <div>
      {singedUp ? (
        //we need frontend route here
        <Redirect to="__________" />
      ) : (<div>
        <Button variant="primary" onClick={handleShow}>
          Sign Up
      </Button>
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton > Sign Up </Modal.Header>
          <Modal.Body className>
              <Form onSubmit={e => {e.preventDefault();
              submitForm()}}>
              <Form.Group  controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                 <Form.Control
                      required
                      type="text"
                      placeholder="Please Enter Your Name"
                      onChange={handleNameChange}
                      value={name} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Please Enter Your Surname"
            onChange={handleSurNameChange}
            value={surname} />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter email" 
                required
                onChange={handleEmailChange}
                value={email} />
                <Form.Text className="text-muted">
                  We’ll never share your email with anyone else.
              </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                type="password" 
                placeholder="Password"
                required
                onChange={handlePasswordChange}
                value={password} />
              </Form.Group>
              <Button variant="primary" type="submit"> Submit
          </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>)}
    </div>
  )
}
export default SignUp;