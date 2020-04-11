import React from "react";
import useInput from "./use-input";

function More_About_You({more_about_you}) {
  
  return (
    <div>
      <h6 className="mt-4">More about you</h6>
      <div className="form-group">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Tell us a bit more about yourself..."
          id="text"
          name="text"
          value={more_about_you.value} 
          onChange={more_about_you.onChange}
          // {...more_about_you}
        ></textarea>
      </div>
    </div>
  );
}
export default More_About_You;
