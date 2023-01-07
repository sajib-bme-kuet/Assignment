import React from "react";

const Tab = ({ label, children }) => {
  return (
    <>
      <h2>{label}</h2>
      {children}
    </>
  );
};

export default Tab;
