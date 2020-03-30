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

function SignUp() {
  const [show, setShow] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function submitForm() {
    axios
      .post("http://localhost:5000/api/users", {
        // name: name.value,
        // surname: surname.value,
        // email: email.value,
        // password: password.value,
        // location: location.value,
        // years_of_experience: years_of_experience.value,
        // more_about_you: more_about_you.value,
        // gender: gender.value,
        // age: age.value,
        // weight: weight.value,
        // height: height.value,
        // partner_gender: partner_gender.value,
        // partner_age: partner_age.value,
        // partner_weight: partner_weight.value,
        // partner_height: partner_height.value,
        // dance_preference: dance_preference.value
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
        <Redirect to="/login" />
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
                onInput='up2.setCustomValidity(up2.value != up.value ? "Passwords do not match." : "")'
              >
                <Basic_Info />
                <Location_Experience />
                <More_About_You />
                <User_Physical_Info />
                <div className="container">
                  <h5 className="text-success mt-5">
                    Your ideal dance partner
                  </h5>
                  <hr />
                  <div className="container border border-top-0 border-info px-5 py-2">
                    <Partner_Physical_Info />
                    <Dance_Preference />
                  </div>
                </div>
                <div className="container my-3">
                  <button type="button" className="btn btn-primary btn-block">
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
