import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <a onClick={(e) => onClick(e)} className={className} hred={href}>
      {children}
    </a>
  );
};
export default Link;
