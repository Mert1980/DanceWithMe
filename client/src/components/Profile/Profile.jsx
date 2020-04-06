import React, { Component } from "react";
import MatchUsers from "./Match-users/Match-users";
import Logout from "../Logout/Logout";


function Profile () {
    return(
        <div>
            <MatchUsers />
            <Logout />
        </div>
    ) 
}

export default Profile