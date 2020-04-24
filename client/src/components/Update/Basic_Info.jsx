import React from "react";

// name, surname, email, password parameters are coming from parent component (Signup)
function Basic_Info({ name, surname, email, password }) {
  return (
    <div>
      <div class="form-group mt-4">
        <h6>Update your password*</h6>
        <input
          id="password1"
          className="form-control  "
          type="password"
          value={password.value}
          onChange={password.onChange}
          name="up"
          placeholder="Password(at least 7 letters/numbers)"
        />
      </div>
    </div>
  );
}

export default Basic_Info;
