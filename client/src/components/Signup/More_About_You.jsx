import React from "react";
import useInput from "./use-input";

function More_About_You() {
  const more_about_you = useInput("");
  return (
    <div>
      <h6 className="mt-4">More about you</h6>
      <div className="form-group">
        <textarea
          className="form-control  "
          rows="3"
          placeholder="Dance interest, dance background and goals..."
          {...more_about_you}
        ></textarea>
      </div>
    </div>
  );
}
export default More_About_You;
