import React, { useState } from 'react';
import { Modal, Button, Form, } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router';
import useInput from "./use-input";


function SignUp() {
  const [show, setShow] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const name = useInput('');
  const surname = useInput('');
  const email = useInput('');
  const password = useInput('');
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submitForm() {
     axios
       .post('http://localhost:5000/users', {name:name.value, surname:surname.value, email:email.value, password: password.value })
       .then(e => {
         if (e.data.token) {
           localStorage.setItem('token', e.data.token);
           localStorage.setItem('ID', e.data.user._id);
           setSignedUp(true);
           console.log(e.data.token);
         } else {
           setSignedUp(false);
         }
       })
       .catch(err => {
         console.log(err);
       });
   }
  return (
    <div>
      {signedUp ? (
        //we need frontend route here
        <Redirect to="/users" />
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
                      {...name}
                    />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Surname</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Please Enter Your Surname"
            {...surname}
            />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Enter email" 
                required
                {...email}
                />
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
                {...password}
                />
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