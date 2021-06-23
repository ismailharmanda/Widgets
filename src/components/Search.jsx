import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const onInputChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            onChange={(e) => onInputChange(e)}
            className="input"
            type="text"
            value={term}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
