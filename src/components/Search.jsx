import React, { useState, useEffect } from "react";
import Wikipedia from "../apis/wikipedia";

const Search = () => {
  const [term, setTerm] = useState("");
  useEffect(() => {
    (async () => {
      const response = await Wikipedia.get("", {
        params: {
          srsearch: term,
        },
      });
    })();
  }, [term]);
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
