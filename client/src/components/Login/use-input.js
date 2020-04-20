import { useState } from "react";

// This function receives empty string as paramater(defaultValue)
const useInput = defaultValue => {
  const [value, setValue] = useState(defaultValue);

  // When user types in any input field, it updates the "value" by the input value 
  // It returns "value" along with the onChange function
  return {
    value,
    onChange: e => setValue(e.target.value)
  };
};

export default useInput;