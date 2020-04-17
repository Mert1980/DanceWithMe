import React, { Component } from "react";
import MatchUsers from "./Match-users/Match-users";
import Logout from "../Logout/Logout";
import UpcomingEvents from "../Profile/Show-events/UpcomingEvents";

function Profile() {
  return (
    <div>
      <div class="row ">
        <div class="col-sm-6 "><UpcomingEvents /></div>
        <div class="col-sm-6"><MatchUsers /></div>

     </div>
      
      
      <Logout />
    </div>
  );
}

export default Profile;
