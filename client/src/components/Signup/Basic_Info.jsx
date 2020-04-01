import React from "react";
import useInput from "./use-input";

function Basic_Info({name, surname, email, password}) {
  
  return (
    <div>
      <div className="form-group mt-4">
        <h6>What is your first name?*</h6>
        <input
          type="text"
          class="form-control "
          id="fname"
          placeholder="Enter first name"
          name="fname"
          required
          value={name.value} 
          onChange={name.onChange}
          // {...name}
        ></input>
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>
      <div className="form-group mt-4">
        <h6>What is your last name?*</h6>
        <input
          type="text"
          className="form-control  "
          id="lname"
          placeholder="Enter last name"
          name="lname"
          required
          value={surname.value} 
          onChange={surname.onChange}
          // {...surname}
        />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>
      <div className="form-group mt-4">
        <h6>What is your email address?*</h6>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
          value={email.value} 
          onChange={email.onChange}
          // {...email}
        />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
      </div>
      <div class="form-group mt-4">
        <h6>Create a password*</h6>
        <input
          id="password1"
          className="form-control  "
          type="password"
          required
          value={password.value} 
          onChange={password.onChange}
          // {...password}
          name="up"
          placeholder="Password"
        />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback mb-4">Please fill out this field.</div>
      </div>
    </div>
  );
}

export default Basic_Info;
