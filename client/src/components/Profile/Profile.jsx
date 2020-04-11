import React, { Component } from "react";
import MatchUsers from "./Match-users/Match-users";
import Logout from "../Logout/Logout";
import UpcomingEvents from "../Profile/Show-events/UpcomingEvents";

function Profile() {
  return (
    <div>
      <UpcomingEvents />
      <MatchUsers />
      <Logout />
    </div>
  );
}

export default Profile;
