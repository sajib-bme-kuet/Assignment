import React from "react";

const Tab = ({ label, children }) => {
  return (
    <div>
      <h2>{label}</h2>
      {children}
    </div>
  );
};

export default Tab;
