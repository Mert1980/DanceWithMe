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

function Landing() {
  return (
    <div>
      <Navbar fixed="top" bg="light" variant="light">
        <Navbar.Brand href="#home">
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
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
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
              In England there are many people looking for a dance partner
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
                  DanceWithMe have helped people being more social and active
                  for years. To get to know people and make friends. To have a
                  healthier and more fun life. Sign up and see members near you.
                </p>
              </Container>
            </Jumbotron>
          </Col>
          <Col sm={4}>
            <Jumbotron fluid>
              <Container>
                <h3 className="text-info">Together is more</h3>
                <hr></hr>
                <p>
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.
                </p>
              </Container>
            </Jumbotron>
          </Col>
          <Col sm={4}>
            <Jumbotron fluid>
              <Container>
                <h3 className="text-info">Together is more</h3>
                <hr></hr>
                <p>
                  We're a community of dancers of all ages with a passion for
                  dance. Members use DanceWithMe to connect with others for
                  social and/or competitive dancing.
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
