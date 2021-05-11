import React, { useState } from "react";
import InputGroup from "./InputGroup";
import axios from "axios";
import CleanButton from "./CleanButton";

function App() {
  const [result, setResult] = useState("");
  const [userInput, setUserInput] = useState("");

  const translate = async (value) => {
    try {
      const res = await axios.get(`https://api.funtranslations.com/translate/pirate.json?text=${value}`);
      const translatedResult = res.data.contents.translated;
      setResult(translatedResult);
    }
    catch(e) {
      alert(`There is no ${value} in the pirat dictionary`);
    }
  }

  const cleanFields = () => {
    setResult("");
    setUserInput("");
  }

  const setInput = (value) => {
    setUserInput(value);
  }

  return (
    <div>
      <InputGroup translateInput={translate} setInput={setInput} userInput={userInput} translatedResult={result}/>
      <CleanButton onClean={cleanFields} />
    </div>
  );
}

export default App;
