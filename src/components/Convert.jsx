import React, { useState, useEffect } from "react";
import googleTranslate from "../apis/googleTranslate";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await googleTranslate.post(
        "",
        {},
        {
          params: {
            q: text,
            target: language.value,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    const delayedTranslation = setTimeout(
      text.length > 0 && doTranslation,
      500
    );
    return () => clearTimeout(delayedTranslation);
  }, [language, text]);
  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
