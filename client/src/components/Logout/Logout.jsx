import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { Button } from "react-bootstrap";

function Logout() {
  const [loggedOut, setLoggedOut] = useState(false);
  function handleClick() {
   const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
  const bodyParameters = {
     key: "value"
  };  

    axios
      .post(
        "http://localhost:5000/api/users/logout", 
        bodyParameters,
        config
      )
      .then(e => {
          console.log(e)
        if (e.status === 200) {
          alert("You have successfully logged out!");
          setLoggedOut(true);
        } else {
          setLoggedOut(false);
        }
      })
    }
  return (
    <>
      {loggedOut ? (
        <Redirect to="/" /> // we need frontend route here
      ) : (
        <div>
          <Button onClick={handleClick}>Logout</Button>
        </div>
      )}
    </>
  );
}

export default Logout;
