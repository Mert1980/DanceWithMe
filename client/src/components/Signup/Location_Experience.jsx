import React from "react";

function Location_Experience({location, years_of_experience}) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 my-2">
          <select {...location} id="cities" name="cities" className="custom-select">
            <option selected>Select Your Province</option>
            <option value="East Midlands">East Midlands</option>
            <option value="East of England">East of England</option>
            <option value="London">London</option>
            <option value="North East">North East</option>
            <option value="North West">North West</option>
            <option value="South East">South East</option>
            <option value="South West">South West</option>
            <option value="West Midlands">West Midlands</option>
            <option value="Yorkshire and the Humber">Yorkshire and the Humber</option>
          </select>
        </div>
        <div className="col-sm-6 my-2">
          <select {...years_of_experience} id="years" name="years" className="custom-select">
            <option selected>Select Years Experience</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="More">More</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Location_Experience;
