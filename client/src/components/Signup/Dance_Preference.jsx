import React from "react";

function Dance_Preference({handleCheckBox}) {
  return (
    <div className="container mt-3">
    
      <h6 className="mb-3">Which type of dance you want to do together?</h6>
      <div class="row">
        <div class="col-sm-8">
            <label>
           <input 
              type="checkbox"
              name="americanRhythm"
              onChange={handleCheckBox}
              />
              American Rhythm
            </label>
          </div>
        <div class="col-sm-4">
        <label>
        <input 
          type="checkbox"
          name="salsa"
          onChange={handleCheckBox}
        />
        Salsa
      </label>
        </div>
      </div>
      <div class="row">
          <div class="col-sm-8">
          <label>
        <input 
          type="checkbox"
          name="latinDance"
          onChange={handleCheckBox}
        />
        Latin Dance
      </label>
          </div>
          <div class="col-sm-4">
          <label>
        <input 
          type="checkbox"
          name="ballet"
          onChange={handleCheckBox}
        />
        Ballet
      </label>
          </div>
     </div>
     <div class="row">
          <div class="col-sm-8">
          <label>
        <input 
          type="checkbox"
          name="soloDance"
          onChange={handleCheckBox}
        />
        Solo Dance
      </label>
          </div>
          <div class="col-sm-4">
          <label>
        <input 
          type="checkbox"
          name="waltz"
          onChange={handleCheckBox}
        />
        Waltz
      </label>          
          </div>
     </div>
     <div class="row">
          <div class="col-sm-8">
          <label>
        <input 
          type="checkbox"
          name="bachata"
          onChange={handleCheckBox}
        />
        Bachata
      </label> 
          </div>
          <div class="col-sm-4">
          <label>
        <input 
          type="checkbox"
          name="tango"
          onChange={handleCheckBox}
        />
        Tango
      </label>
          </div>
     </div>
  
    </div>
  );
}

export default Dance_Preference;
