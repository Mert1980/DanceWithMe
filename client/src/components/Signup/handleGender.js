import { useState } from "react";

const handleGender = defaultValue => {
  
  const [gender, setGender] = useState(defaultValue);

  return {
    gender,
    onChange: event => {
      const {name, value} = event.target 
      setGender({ [name]: value })
    }
  };
};

export default handleGender;