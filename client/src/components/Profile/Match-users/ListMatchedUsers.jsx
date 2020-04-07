import React from "react";

function UserMatch(props) {
    console.log(props.item)
    const interest = props.item.dance_preference.join(', ');

    return (

        <div class="card-body">
            <div class="container">
                <div class="row mt-1">
                    <div class="col-sm-3"><img src="../../../../public/images/img_avatar1.png" class="img-fluid" alt="e" /></div>
                    <div class="col-sm-6">
                        <h6 class="font-weight-light">{props.item.name}</h6>
                        <small>{interest}</small>
                        <p class="lead">{props.item.location}</p>
                    </div>
                    <div class="col-sm-3">
                        <button type="button" class="btn btn-outline-success mt-2"><small>+</small></button>
                    </div>
                </div>
                <hr />
            </div>
        </div>

    );
}

function ListMatchedUsers (props) {
    console.log(props.users)
    const matchedUsers = props.users.map(item => <UserMatch item = {item}/>)
    return(
        <div id="collapseOne" class="collapse show">
            {matchedUsers}
        </div>
    );
}
export default ListMatchedUsers