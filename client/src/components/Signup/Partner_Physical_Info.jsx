import React from "react";

// handleButtonPartner, partner_age, partner_weight, partner_height parameters
// are coming from parent component (Signup)
function Partner_Physical_Info({
  handleButtonPartner,
  partner_age,
  partner_weight,
  partner_height,
}) {
  return (
    <div>
      <div>
        <h6 className="mt-4">Are you looking for a man or woman?</h6>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <input
            type="radio"
            name="genderPartner"
            value="male"
            id="male2"
            onChange={handleButtonPartner}
          />
          <label for="male2">Male</label>
        </div>
        <div class="col-sm-6">
          <input
            type="radio"
            name="genderPartner"
            value="female"
            id="female2"
            onChange={handleButtonPartner}
          />
          <label for="female2">Female</label>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-sm-12">
          {" "}
          <select
            {...partner_age}
            id="ages"
            name="ages"
            className="custom-select my-2 "
          >
            <option selected>Select Age Range</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35-44">35-44</option>
            <option value="45-54">45-54</option>
            <option value="55-64">55-64</option>
            <option value="More">More</option>
          </select>
        </div>
        <div className="col-sm-12">
          {" "}
          <select
            {...partner_height}
            id="heights"
            name="heights"
            className="custom-select my-2 "
          >
            <option selected>Select Height Range</option>
            <option value="140-149">140-149</option>
            <option value="150-159">150-159</option>
            <option value="160-169">160-169</option>
            <option value="170-179">170-179</option>
            <option value="180-189">180-189</option>
            <option value="190-199">190-199</option>
            <option value="More">More</option>
          </select>
        </div>
        <div className="col-sm-12">
          {" "}
          <select
            {...partner_weight}
            id="weights"
            name="weights"
            className="custom-select my-2"
          >
            <option selected>Select Weight Range</option>
            <option value="50-59">50-59</option>
            <option value="60-69">60-69</option>
            <option value="70-79">70-79</option>
            <option value="80-89">80-89</option>
            <option value="90-99">90-99</option>
            <option value="More">More</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Partner_Physical_Info;
