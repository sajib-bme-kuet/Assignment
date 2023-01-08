import React, { useState } from "react";
import "./select.css";

function Select({ name, label, options, formik }) {
  const [value, setValue] = useState(formik.values[name]);
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick(option) {
    setValue(option);
    setIsOpen(false);
    formik.setFieldValue(name, option);
  }

  return (
    <div className="select">
      <div className="selected" onClick={handleToggle}>
        {value || `Select a ${label}`}
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
