import React from "react";

function Dance_Preference({handleCheckBox}) {
  return (
    <div>
      <h6>Which type of dance you want to do together?</h6>
      <label>
        <input
          type="checkbox"
          name="ballet"
          onChange={handleCheckBox}
        />
        Ballet
      </label>
      <label>
        <input
          type="checkbox"
          name="salsa"
          onChange={handleCheckBox}
        />
        Salsa
      </label>
      <label>
        <input
          type="checkbox"
          name="waltz"
          onChange={handleCheckBox}
        />
        Waltz
      </label>
      <label>
        <input
          type="checkbox"
          name="tango"
          onChange={handleCheckBox}
        />
        Tango
      </label>
      <label>
        <input
          type="checkbox"
          name="latinDance"
          onChange={handleCheckBox}
        />
        Latin Dance
      </label>
      <label>
        <input
          type="checkbox"
          name="bachata"
          onChange={handleCheckBox}
        />
        Bachata
      </label>
      <label>
        <input
          type="checkbox"
          name="americanRhythm"
          onChange={handleCheckBox}
        />
        American Rhythm
      </label>
      <label>
        <input
          type="checkbox"
          name="soloDance"
          onChange={handleCheckBox}
        />
        Solo Dance
      </label>
    </div>
  );
}

export default Dance_Preference;
