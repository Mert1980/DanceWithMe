import React from "react";

// handleCheckBox parameter(function) is coming from parent component (Signup)
function Dance_Preference({ handleCheckBox }) {
  return (
    <div className="container mt-3">
      <h6 className="mb-3">Which type of dance you want to do together?</h6>
      <div class="row">
        <div class="col-sm-8">
          <label>
            <input
              type="checkbox"
              name="American Rhythm"
              onChange={handleCheckBox}
            />
            American Rhythm
          </label>
        </div>
        <div class="col-sm-4">
          <label>
            <input type="checkbox" name="Salsa" onChange={handleCheckBox} />
            Salsa
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <label>
            <input
              type="checkbox"
              name="Latin Dance"
              onChange={handleCheckBox}
            />
            Latin Dance
          </label>
        </div>
        <div class="col-sm-4">
          <label>
            <input type="checkbox" name="Ballet" onChange={handleCheckBox} />
            Ballet
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <label>
            <input
              type="checkbox"
              name="Solo Dance"
              onChange={handleCheckBox}
            />
            Solo Dance
          </label>
        </div>
        <div class="col-sm-4">
          <label>
            <input type="checkbox" name="Waltz" onChange={handleCheckBox} />
            Waltz
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8">
          <label>
            <input type="checkbox" name="Bachata" onChange={handleCheckBox} />
            Bachata
          </label>
        </div>
        <div class="col-sm-4">
          <label>
            <input type="checkbox" name="Tango" onChange={handleCheckBox} />
            Tango
          </label>
        </div>
      </div>
    </div>
  );
}

export default Dance_Preference;
