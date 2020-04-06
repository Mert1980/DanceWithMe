import React from "react";

function Partner_Physical_Info({
  handleButtonPartner,
  partner_age,
  partner_weight,
  partner_height
}) {
  return (
    <div>
      <div>
        <h6 className="mt-4">Are you looking for a man or woman?</h6>
      </div>
      <div class="custom-control custom-radio custom-control-inline w-25">
        <input
          type="radio"
          // className="custom-control-input"
          name="genderPartner"
          value="male"
          onChange={handleButtonPartner}
        />
        <label className="custom-control-label" for="customRadio3">
          Male
        </label>
      </div>
      <div className="custom-control custom-radio custom-control-inline w-25">
        <input
          type="radio"
          // className="custom-control-input"
          name="genderPartner"
          value="female"
          onChange={handleButtonPartner}
        />
        <label className="custom-control-label" for="customRadio4">
          Female
        </label>
      </div>
      <div className="row mt-4">
        <div className="col-sm-4">
          {" "}
          <select
            {...partner_age}
            id="ages"
            name="ages"
            className="custom-select my-2 "
          >
            <option selected>Select Age Range</option>
            <option value="18-25">18-25</option>
            <option value="25-35">25-35</option>
            <option value="35-45">35-45</option>
            <option value="45-55">45-55</option>
            <option value="55-65">55-65</option>
            <option value="More">More</option>
          </select>
        </div>
        <div className="col-sm-4">
          {" "}
          <select
            {...partner_height}
            id="heights"
            name="heights"
            className="custom-select my-2 "
          >
            <option selected>Select Height Range</option>
            <option value="140-150">140-150</option>
            <option value="150-160">150-160</option>
            <option value="160-170">160-170</option>
            <option value="170-180">170-180</option>
            <option value="180-190">180-190</option>
            <option value="190-200">190-200</option>
            <option value="More">More</option>
          </select>
        </div>
        <div className="col-sm-4">
          {" "}
          <select
            {...partner_weight}
            id="weights"
            name="weights"
            className="custom-select my-2"
          >
            <option selected>Select Weight Range</option>
            <option value="50-60">50-60</option>
            <option value="60-70">60-70</option>
            <option value="70-80">70-80</option>
            <option value="80-90">80-90</option>
            <option value="90-100">90-100</option>
            <option value="More">More</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Partner_Physical_Info;
