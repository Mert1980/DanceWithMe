import React from "react";

// handleButtonPartner, age, weight, height parameters are coming from
// parent component (Signup)
function User_Physical_Info({ handleButtonUser, age, weight, height }) {
  return (
    <div>
      <div className="container">
        <h5 className="text-success mt-5">Update Your Physical Information</h5>
        <hr />
        <div className="container border border-top-0 border-info px-5 py-2">
          
          <div className="row mt-3 py-4">
            <div className="col-sm-12">
              <div className="form-group">
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="18"
                  max="55"
                  placeholder="age"
                  className="form-control"
                  {...age}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <input
                  type="number"
                  id="height"
                  name="height"
                  min="160"
                  max="200"
                  placeholder="height(cm)"
                  className="form-control"
                 {...height}
                />
              </div>
            </div>
            <div className="col-sm-12">
              <div className="form-group">
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  min="50"
                  max="115"
                  placeholder="weight(kg)"
                  className="form-control"
                 {...weight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User_Physical_Info;
