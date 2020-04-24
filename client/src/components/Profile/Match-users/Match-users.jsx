import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import ListMatchedUsers from "./ListMatchedUsers";

// This component renders matched users in the profile page
function MatchUsers() {
  // If user clicks the "match users" button, "clicked" variable turns into "true"
  const [clicked, setClicked] = useState(false);

  // If returned value of the post request in an empty array, an informative message
  // is set into "text" variable
  const [text, setText] = useState("");

  // We receive the matched users as an array of objects from the post request,
  // then assign them into "users" variable in order to render them in the child component
  // (ListMatchedUsers)
  const [users, setUsers] = useState([]);

  function handleClick() {
    // set "clicked" variable to "true"
    setClicked(true);

    // get token from local storage in order to send it to backend to verify user
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const bodyParameters = {
      key: "value",
    };

    axios
      .post(
        "https://hyf-class6-dancewithme.herokuapp.com/api/users/me",
        bodyParameters,
        config
      )
      .then((e) => {
        if (e.data.length !== 0) {
          setUsers(e.data);
        } else {
          setText(
            <div class="alert alert-info alert-dismissible fade show">
              <strong>Sorry!</strong> There are no registered users matching
              your preferences.
            </div>
          );
        }
      });
  }

  return (
    <>
      <div>
        <Button onClick={handleClick}>Show Matched Users</Button>
      </div>
      {clicked && (
        <div>
          <ListMatchedUsers users={users} />
          <br />
          {text}
        </div>
      )}
    </>
  );
}

export default MatchUsers;
