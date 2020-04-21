import React, { Component } from "react";
import MatchUsers from "./Match-users/Match-users";
import Logout from "../Logout/Logout";
import UpcomingEvents from "../Profile/Show-events/UpcomingEvents";
import { Navbar, Nav, Form } from "react-bootstrap";
import dancing from "../Landing/dancing.png";

// This component has 3 children; UpcomingEvents, MatchUsers and Logout
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
            <button type="button" class="btn btn-secondary mr-2">
              Update
            </button>
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
