import React from "react";

function Dance_Preference() {
  return (
    <div>
      <div w-100>
        <h6 className="mt-5">Which type of dance you want to do together?</h6>
        <div className="row mt-1">
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
              />
              <label className="form-check-label" for="inlineCheckbox1">
                Ballet
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
              />
              <label className="form-check-label" for="inlineCheckbox2">
                Salsa
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
              />
              <label className="form-check-label" for="inlineCheckbox3">
                Waltz
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox4"
              />
              <label className="form-check-label" for="inlineCheckbox4">
                Tango
              </label>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox5"
              />
              <label className="form-check-label" for="inlineCheckbox5">
                Latin Dance
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox6"
              />
              <label className="form-check-label" for="inlineCheckbox6">
                Bachata
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox7"
              />
              <label className="form-check-label" for="inlineCheckbox7">
                American Rhythm
              </label>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox8"
              />
              <label className="form-check-label" for="inlineCheckbox8">
                Solo Dance
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dance_Preference;
