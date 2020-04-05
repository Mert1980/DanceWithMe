import React, { useState } from 'react';
import axios from "axios";
import { Button } from "react-bootstrap";
import ListMatchedUsers from "./ListMatchedUsers"

function MatchUsers () {
    const [clicked, setClicked] = useState(false)
    const [users, setUsers] = useState([])
    function handleClick() {
        const config = {
           headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
         };
       const bodyParameters = {
          key: "value"
       };  
    
    axios.post( 
      'http://localhost:5000/api/users/me',
      bodyParameters,
      config
    )
    .then(e => {
        setUsers(e.data)
      if (e.status === 200) {
        setClicked(true);
      } else {
        setClicked(false);
      }
    });
}

    return(
        <>
        <div>
          <Button onClick={handleClick}>Show Matched Users</Button>
        </div>
        { clicked &&  
        <div>
          <h3>Matched-users</h3>
          <ListMatchedUsers users={users} />
        </div>
        }
        </> 
    ) 
}

export default MatchUsers