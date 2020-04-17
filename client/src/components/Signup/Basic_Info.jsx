import React from "react";

// name, surname, email, password parameters are coming from parent component (Signup)
function Basic_Info({ name, surname, email, password }) {
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
          name="up"
          placeholder="Password(at least 7 letters/numbers)"
        />
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback mb-4">Please fill out this field.</div>
      </div>
    </div>
  );
}

export default Basic_Info;
