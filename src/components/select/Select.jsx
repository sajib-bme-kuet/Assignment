import React, { useState } from "react";
import "./select.css";

function Select({ fieldName, options, onChange }) {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick(option) {
    setValue(option);
    setIsOpen(false);
    onChange(option);
  }

  return (
    <div className="select">
      <div className="selected" onClick={handleToggle}>
        {value || `Select a ${fieldName}`}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li
              key={option}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
