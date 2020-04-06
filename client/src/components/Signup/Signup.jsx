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

function SignUp() {
  const [show, setShow] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const [gender, setGender] = useState("");
  const [partner_gender, setPartnerGender] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonUser = event => {
    const { value } = event.target;
    setGender(value);
  };

  const handleButtonPartner = event => {
    const { value } = event.target;
    setPartnerGender(value);
  };
  let checkedDanceTypes = [];
  
  const handleCheckBox = event => {
    const { name, checked } = event.target;
    if (checked) {
      checkedDanceTypes.push(name);
    } else if (!checked) {
      checkedDanceTypes = checkedDanceTypes.filter(e => e !== name)
    }
  };

  const name = useInput("");
  const surname = useInput("");
  const email = useInput("");
  const password = useInput("");
  const more_about_you = useInput("");
  const age = useInput("");
  const weight = useInput("");
  const height = useInput("");
  const partner_age = useInput("");
  const partner_weight = useInput("");
  const partner_height = useInput("");
  const location = useInput("");
  const years_of_experience = useInput("");
 
  function submitForm() {
    axios
      .post("http://localhost:5000/api/users", {
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
