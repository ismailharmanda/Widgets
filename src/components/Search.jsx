import React, { useState, useEffect } from "react";
import Wikipedia from "../apis/wikipedia";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const onInputChange = (e) => {
    setTerm(e.target.value);
  };
  useEffect(() => {
    term !== "" &&
      (async () => {
        const { data } = await Wikipedia.get("", {
          params: {
            srsearch: term,
          },
        });
        setResults(data.query.search);
      })();
  }, [term]);
  const renderedResults = results.map((result, index) => {
    return (
      <div key={result.pageid} className="item">
        <div className="content">
          <div className="header">{result.title}</div>
          {result.snippet}
        </div>
      </div>
    );
  });
  console.log(results);
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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
