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
  return (
    <div>
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
