import React, { Component } from "react";
import MatchUsers from "./Match-users/Match-users";
import Logout from "../Logout/Logout";
import Update from "../Update/Update";
import UpcomingEvents from "../Profile/Show-events/UpcomingEvents";
import { Navbar, Nav, Form } from "react-bootstrap";
import dancing from "../Landing/dancing.png";

// This component has 4 children; UpcomingEvents, MatchUsers, Update and Logout
function Profile() {
  return (
    <div>
      <div>
        <Navbar fixed="top" bg="light" variant="light">
          <Navbar.Brand href="https://hyf-class6-dancewithme.herokuapp.com/">
            <img
              alt=""
              src={dancing}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            DanceWithMe
          </Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <a href="#!" className="btn btn-outline-white btn-rounded">
              <Update />
            </a>
            <Logout />
          </Form>
        </Navbar>
      </div>
      <div class="row mt-5 pt-4 ">
        <div class="col-sm-6 ">
          <UpcomingEvents />
        </div>
        <div class="col-sm-6">
          <MatchUsers />
        </div>
      </div>
    </div>
  );
}

export default Profile;
