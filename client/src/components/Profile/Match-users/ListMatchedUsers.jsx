import React, { useState } from "react";

function UserMatch(props) {
  console.log(props.item);
  const interest = props.item.dance_preference.join(", ");

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
            <small>{interest}</small>
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

function ListMatchedUsers(props) {
  console.log(props.users);
  const matchedUsers = props.users.map((item) => <UserMatch item={item} />);
  return (
    <div id="collapseOne" class="collapse show">
      {matchedUsers}
    </div>
  );
}
export default ListMatchedUsers;
