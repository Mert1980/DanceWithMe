import React from "react";

function User_Physical_Info({ handleButtonUser, age, weight, height }) {
  
  return (
    <div>
      <div className="container">
        <h5 className="text-success mt-5">Physical Information</h5>
        <hr />
        <div className="container border border-top-0 border-info px-5 py-2">
          <h6 className="mt-4">Gender</h6>
          <div className="custom-control custom-radio custom-control-inline w-25">
            <input
              type="radio"
              // className="custom-control-input"
              name="genderUser"
              value="male"
              onChange={handleButtonUser}
            />
            <label className="custom-control-label" for="customRadio">
              Male
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline w-25">
            <input
              type="radio"
              // className="custom-control-input"
              name="genderUser"
              value="female"
              onChange={handleButtonUser}
            />
            <label className="custom-control-label" for="customRadio2">
              Female
            </label>
          </div>

          <div className="row mt-3 py-4">
            <div className="col-sm-4">
              <div className="form-group">
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="18"
                  max="55"
                  placeholder="age"
                  className="form-control"
                  required
                  {...age}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <input
                  type="number"
                  id="height"
                  name="height"
                  min="160"
                  max="200"
                  placeholder="height(cm)"
                  className="form-control"
                  required
                  {...height}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <input
                  type="number"
                  id="weight"
                  name="weight"
                  min="50"
                  max="115"
                  placeholder="weight(kg)"
                  className="form-control"
                  required
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

