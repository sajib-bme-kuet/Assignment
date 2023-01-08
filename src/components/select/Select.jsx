import React, { useState } from "react";
import "./select.css";

function Select({ name, label, options, initialValue, onChange }) {
  const [value, setValue] = useState(initialValue);
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick(option) {
    setValue(option?.name);
    setIsOpen(false);
    onChange(option);
  }

  return (
    <div className="select">
      <div className="selected" onClick={handleToggle}>
        {!value ? `Select a ${label}` : value}
      </div>
      {isOpen && (
        <ul className="options">
          {options.map((option, index) => (
            <li
              key={index}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option?.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
