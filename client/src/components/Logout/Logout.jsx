import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import { Button } from "react-bootstrap";

function Logout() {
  const [loggedOut, setLoggedOut] = useState(false);
  function handleClick() {
    axios
      .post(
        "https://hyf-class6-dancewithme.herokuapp.com/api/users/logout", 
        { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`} }
      )
      .then(e => {
          console.log(e)
        if (e.data.token) {
          alert("You have successfully logged out!");
          setLoggedOut(true);
        } else {
          setLoggedOut(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
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
