import { useState } from "react";

// This function is called in Signup component to assign event.target.hljs-value
// to the following variables name, surname, email, password, more_about_you,
// age, height, partner_age, partner_weight, partner_height,
// location, years_of_experience
// defaultValue is empty string
const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  
  // It returns value and onChange function
  return {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
};

export default useInput;
