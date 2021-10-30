import PhoneInput from "react-phone-number-input";
import React, { useState, useRef } from "react";
// import 'react-phone-number-input/style.css'
const Phone = () => {
    const [value, setValue] = useState()
  return (
    <div className="w-full">
        <PhoneInput className="mt-4 w-full"
      placeholder="Enter phone number"
      value={value}
      onChange={setValue}/>
      {value}
    </div>
  )
}

export default Phone
