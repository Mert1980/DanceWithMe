import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Carousel,
  Container,
  Row,
  Col,
  Jumbotron,
} from "react-bootstrap";
import SignUp from "../Signup/Signup";
import Login from "../Login/Login";
import dance1 from "../Landing/dance1.jpg";
import dance2 from "../Landing/dance2.jpg";
import dancing from "../Landing/dancing.png";

// This is the landing page of the application
// Is has two children (Login Component and Signup Component)
function Landing() {
  return (
    <div>
      <Navbar fixed="top" bg="light" variant="light">
        <Navbar.Brand href="http://localhost:3000/">
          <img
            alt=""
            src={dancing}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          DanceWithMe
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="http://localhost:3000/">Home</Nav.Link>
          <Nav.Link href="about.html">About</Nav.Link>
        </Nav>
        <Form inline>
          <Login text="Login" color="outline-primary" />
          <SignUp />
        </Form>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={dance1} alt="First slide" />
          <Carousel.Caption className="h-50">
            <h3>
              <Login text="Find Your Matches" color="primary" />
            </h3>
            <p className="text-danger font-weight-bold h-25">
              Are you looking for your perfect dance partner? Let us find for
              you!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={dance2} alt="Second slide" />

          <Carousel.Caption className="h-50"></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="mt-5">
        <Row>
          <Col sm={4}>
            <Jumbotron fluid>
              <Container>
                <h3 className="text-info">Together is more</h3>
                <hr></hr>
                <p>
                  DanceWithMe has a mission to help people be more social and
                  active. To get to know people and make friends. To have a
                  healthier and more fun life. Sign up and find the perfect
                  dance partner near you.
                </p>
              </Container>
            </Jumbotron>
          </Col>
          <Col sm={4}>
            <Jumbotron fluid>
              <Container>
                <h3 className="text-info">Reliable</h3>
                <hr></hr>
                <p>
                  All profiles are screened manually. As such, the reliability
                  of the members is very high. Our team of employees closely
                  monitor the website daily.
                </p>
              </Container>
            </Jumbotron>
          </Col>
          <Col sm={4}>
            <Jumbotron fluid>
              <Container>
                <h3 className="text-info">Security</h3>
                <hr></hr>
                <p>
                  Your privacy comes first for us. You don't have to fill in
                  anything that isn't necessary. Your data isn't shared with
                  third parties.
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>

      <footer className="border rounded container pt-4">
        <div className="container">
          <ul className="text-center py-2">
            <li className="list-inline-item">
              <h5 className="pt-1 text-info">Register for free</h5>
            </li>
            <li className="list-inline-item">
              <a href="#!" className="btn btn-outline-white btn-rounded">
                <SignUp />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="">DanceWithMe</a>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
