import React, { useState, useEffect } from "react";
import googleTranslate from "../apis/googleTranslate";

const Convert = ({ language, text }) => {
    const [translated, setTranslated]
  useEffect(() => {
    googleTranslate.post(
      "",
      {},
      {
        params: {
          q: text,
          target: language.value,
        },
      }
    );
  }, [language, text]);
  return <div />;
};

export default Convert;
