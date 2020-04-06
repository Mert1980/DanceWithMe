import React from "react";

function Location_Experience({location, years_of_experience}) {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 my-2">
          <select {...location} id="cities" name="cities" className="custom-select">
            <option selected>Select Your Province</option>
            <option value="Antwerpen">Antwerpen</option>
            <option value="Limburg">Limburg</option>
            <option value="Oost-Vlaanderen">Oost-Vlaanderen</option>
            <option value="Vlaams-Brabant">Vlaams-Brabant</option>
            <option value="West-Vlaanderen">West-Vlaanderen</option>
            <option value="Henegouwen">Henegouwen</option>
            <option value="Luik">Luik</option>
            <option value="Luxemburg">Luxemburg</option>
            <option value="Namen">Namen</option>
            <option value="Waals-Brabant">Waals-Brabant</option>
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
