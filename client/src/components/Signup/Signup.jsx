import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router";
import Basic_Info from "./Basic_Info";
import Location_Experience from "./Location_Experience";
import More_About_You from "./More_About_You";
import User_Physical_Info from "./User_Physical_Info";
import Dance_Preference from "./Dance_Preference";
import Partner_Physical_Info from "./Partner_Physical_Info";
import useInput from "./use-input";

// This components has 6 children (Basic_Info, Dance_Preference,
// Location_Experience, More_About_You, Partner_Physical_Info
// User_Physical_Info Components) and 1 external function (use-input) 
function SignUp() {

  // "show" becomes "true" when user clicks "signup" button or vice versa 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // If post request returns with user data "signedUp" variable turns "true"
  const [signedUp, setSignedUp] = useState(false);

  // "gender" value becomes "male" or "female" depending which radio button user clicks
  const [gender, setGender] = useState("");
  const handleButtonUser = event => {
    const { value } = event.target;
    setGender(value);
  };

   // "partner_gender" value becomes "male" or "female" depending which radio button user clicks
  const [partner_gender, setPartnerGender] = useState("");
  const handleButtonPartner = event => {
    const { value } = event.target;
    setPartnerGender(value);
  };

  
  // Dance preferences are stored in an array in String type 
  let checkedDanceTypes = [];
    const handleCheckBox = event => {
    const { name, checked } = event.target;
    if (checked) {
      // If the user selects a dance type, it is pushed into the array
      checkedDanceTypes.push(name);
      // If the user cancels the selection, it is removed from the array
    } else if (!checked) {
      checkedDanceTypes = checkedDanceTypes.filter(e => e !== name)
    }
  };

  // useInput function is called to assign the event.target values
  // to the following variables
  const name = useInput(""); // String
  const surname = useInput(""); // String
  const email = useInput(""); // String
  const password = useInput(""); // String
  const more_about_you = useInput(""); // String
  const age = useInput(""); // Number
  const weight = useInput(""); // Number
  const height = useInput(""); // Number
  const partner_age = useInput(""); // String
  const partner_weight = useInput(""); // String
  const partner_height = useInput(""); // String
  const location = useInput(""); // String
  const years_of_experience = useInput(""); // Number
 
  // Send all the input to backend via axios post request
  function submitForm() {
    axios
      .post("https://hyf-class6-dancewithme.herokuapp.com/api/users", {
        name: name.value,
        surname: surname.value,
        email: email.value,
        password: password.value,
        location: location.value,
        years_of_experience: years_of_experience.value,
        more_about_you: more_about_you.value,
        age: age.value,
        weight: weight.value,
        height: height.value,
        partner_age: partner_age.value,
        partner_weight: partner_weight.value,
        partner_height: partner_height.value,
        gender: gender,
        partner_gender: partner_gender,
        dance_preference: checkedDanceTypes
      })
      .then(e => {
        if (e.data.token) {
          // user token and ID is stored in local storage in order to use them
          // when user wants to see matched users in profile page or wants to log out 
          localStorage.setItem("token", e.data.token);
          localStorage.setItem("ID", e.data.user._id);
          setSignedUp(true);
        } else {
          setSignedUp(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div>
      {signedUp ? (
        <Redirect to="/users/me" />
      ) : (
        <div>
          <Button variant="outline-primary" onClick={handleShow}>
            Sign Up
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  submitForm();
                }}
                action="/newaccount"
                method="post"
                className="was-validated"
              >
                <Basic_Info
                  name={name}
                  surname={surname}
                  email={email}
                  password={password}
                />
                <Location_Experience
                  location={location}
                  years_of_experience={years_of_experience}
                />
                <More_About_You more_about_you={more_about_you} />
                <User_Physical_Info
                  handleButtonUser={handleButtonUser}
                  age={age}
                  weight={weight}
                  height={height}
                />
                <div className="container">
                  <h5 className="text-success mt-5">
                    Your ideal dance partner
                  </h5>
                  <hr />
                  <div className="container border border-top-0 border-info px-5 py-2">
                    <Partner_Physical_Info
                      handleButtonPartner={handleButtonPartner}
                      partner_age={partner_age}
                      partner_weight={partner_weight}
                      partner_height={partner_height}
                    />
                    <Dance_Preference handleCheckBox={handleCheckBox} />
                  </div>
                </div>
                <div className="container my-3">
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit and meet your mathes now
                  </button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </div>
  );
}
export default SignUp;
