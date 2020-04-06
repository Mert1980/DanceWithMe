import React from "react";

function ListMatchedUsers (users) {
    console.log(users)
    return(
        <div>
            <ul>
                <li>Name: {users.users[1].name}</li>
                <li>Location:{users.users[1].location}</li>
                <li>Dance Prefence: {users.users[1].dance_preference[0]}</li>
                <li>Dance Prefence: {users.users[1].dance_preference[1]}</li>
            </ul>

        </div>
    ) 
}

export default ListMatchedUsers