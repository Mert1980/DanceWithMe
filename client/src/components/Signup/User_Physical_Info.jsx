import React from "react";

function User_Physical_Info({ handleButtonUser, age, weight, height }) {
  
  return (
    <div>
      <div className="container">
        <h5 className="text-success mt-5">Physical Information</h5>
        <hr />
        <div className="container border border-top-0 border-info px-5 py-2">
          <h6 className="mt-4">Your Gender</h6>
          <div class="row">
            <div class="col-sm-6">
            <input
              type="radio"
              // className="custom-control-input"
              name="genderUser"
              value="male"
              id="male1"
              onChange={handleButtonUser}
            />
            
            <label for="male1">Male</label>
           
            </div>
            <div class="col-sm-6">
            <input
              type="radio"
              // className="custom-control-input"
              name="genderUser"
              value="female"
              id="female1"
              onChange={handleButtonUser}
            />
          
          <label for="female1">Female</label>
           
            </div>
          </div>
        
      

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
                  required
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
                  required
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

