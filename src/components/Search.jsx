import React, { useState, useEffect } from "react";
import Wikipedia from "../apis/wikipedia";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const onInputChange = (e) => {
    setTerm(e.target.value);
  };
  useEffect(() => {
    term.length >= 1 &&
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
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org/wiki/${result.title}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
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
