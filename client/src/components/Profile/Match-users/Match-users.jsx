import React, { useState } from 'react';
import axios from "axios";
import { Button } from "react-bootstrap";

function MatchUsers () {
    const [clicked, setClicked] = useState(false)
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
        console.log(e)
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
            <h3>Matched-users will be displayed here</h3>
        </div>
        }
        </> 
    ) 
}

export default MatchUsers