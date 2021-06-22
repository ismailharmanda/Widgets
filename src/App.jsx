import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front end Javascript library.",
  },
  {
    title: "Why ise React?",
    content: "Reacy is a favorite JS library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
export default App;
