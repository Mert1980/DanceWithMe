import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import ListMatchedUsers from "./ListMatchedUsers";

function MatchUsers() {
  const [clicked, setClicked] = useState(false);
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  function handleClick() {
    setClicked(true);
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
