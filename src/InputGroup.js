import React, { useState } from "react";

function InputField({translateInput, setInput, userInput, translatedResult}) {
  
  return(
    <div>
      <input 
        value={userInput} 
        onChange={(e) => setInput(e.target.value)}>
      </input>
      <button onClick={() => translateInput(userInput)}>translate</button>
      <input value={translatedResult}></input>
    </div>
  )  
}

export default InputField;
