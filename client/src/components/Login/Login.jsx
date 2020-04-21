import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router";
import useInput from "./use-input";

function Login(props) {
  // when show is true, login component is shown as a popup
  const [show, setShow] = useState(false);

  // User is redirected to profile page only if loggedIn is true
  const [loggedIn, setLoggedIn] = useState(false);

  // user email and password are received from event.target via useInput function
  const email = useInput("");
  const password = useInput("");

  // set show variable to "false" when user clicks signup button
  const handleClose = () => setShow(false);

  // set show variable to "true" when user clicks signup button
  const handleShow = () => setShow(true);

  // send post request to backend route handler
  // If successful, this post request saves token and ID into local storage
  // Bootstrap is used to style the component
  function submitForm() {
    axios
      .post("https://hyf-class6-dancewithme.herokuapp.com/api/users/login", {
        email: email.value,
        password: password.value,
      })
      .then((e) => {
        console.log(e);
        if (e.data.token) {
          alert("You have successfully logged in!");
          localStorage.setItem("token", e.data.token);
          localStorage.setItem("ID", e.data.user._id);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch((err) => {
        alert("Username or password is not correct");
        console.log(err);
      });
  }
  return (
    <>
      {loggedIn ? (
        <Redirect to="/users/me" /> // this is the frontend router
      ) : (
        <div>
          <Button variant={props.color} onClick={handleShow}>
            {props.text}
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body className>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  submitForm();
                }}
              >
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
                <Button variant="primary" type="submit">
                  {" "}
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
}
export default Login;
