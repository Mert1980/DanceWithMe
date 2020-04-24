import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { Button } from "react-bootstrap";

// This component handles the logout operation
function Logout() {
  // We control the logout state with "loggedOut" variable
  const [loggedOut, setLoggedOut] = useState(false);

  // When user clicks logout button, token is retreived from localStorage
  // and is sent back to backend router
  function handleClick() {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const bodyParameters = {
      key: "value",
    };
    // axios is used to send post request
    axios
      .post(
        "https://hyf-class6-dancewithme.herokuapp.com/api/users/logout",
        bodyParameters,
        config
      )
      .then((e) => {
        if (e.status === 200) {
          setLoggedOut(true);
        } else {
          setLoggedOut(false);
        }
      });
  }
  return (
    <>
      {loggedOut ? (
        <Redirect to="/" /> // This is frontend route. It redirects user to the homepage if logout is clicked
      ) : (
        <div>
          <button type="button" onClick={handleClick} class="btn btn-secondary">
            Logout
          </button>
        </div>
      )}
    </>
  );
}

export default Logout;
