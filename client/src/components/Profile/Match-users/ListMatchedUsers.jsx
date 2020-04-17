import React, { useState } from "react";

// matched users are passed into this component as props
function ListMatchedUsers(props) {

  // map and render "UserMatch" component for every user
  // pass individual user data (item) as props
  const matchedUsers = props.users.map((item) => <UserMatch item={item} />);
  return (
    <div id="collapseOne" class="collapse show">
      {matchedUsers}
    </div>
  );
}

// props is the individual user data
function UserMatch(props) {
  // We merge dance preferences coming from check boxes
  const dancePreferences = props.item.dance_preference.join(", ");

  // If the user clicks plus (+) button showMail variable turns into "true"
  // We control the show of the user mail with this variable
  const [showMail, setshowMail] = useState(false);
  const handleClick = () => {
    if (!showMail) {
      setshowMail(true);
    } else {
      setshowMail(false);
    }
  };

  return (
    <div class="card-body">
      <div class="container">
        <div class="row mt-1">
          <div class="col-sm-3">
            <img
              width="120"
              height="120"
              src="/images/img_avatar1.png"
              class="img-fluid rounded-circle"
              alt="e"
            />
          </div>
          <div class="col-sm-6">
            <h6 class="font-weight-light">{props.item.name}</h6>
            <small>{dancePreferences}</small>
            <p class="lead">{props.item.location}</p>
            {showMail && <h6 class="text-primary">{props.item.email}</h6>}
          </div>
          <div class="col-sm-3">
            <button
              type="button"
              onClick={handleClick}
              class="btn btn-outline-success mt-2"
            >
              <small>+</small>
            </button>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default ListMatchedUsers;
