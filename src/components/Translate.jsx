import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Turkish",
    value: "tr",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[2]);
  const [text, setText] = useState("");
  const onInputChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => onInputChange(e)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
    </div>
  );
};

export default Translate;
