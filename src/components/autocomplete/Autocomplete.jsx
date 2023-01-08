import React, { useState, useEffect } from "react";
import "./autocomplete.css";

function Autocomlete({ options, onChange }) {
  const [value, setValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (value === "") {
      setFilteredOptions([]);
      setIsOpen(false);
    } else {
      setFilteredOptions(
        options.filter((option) =>
          option.toLowerCase().startsWith(value.toLowerCase())
        )
      );
      setIsOpen(true);
    }
  }, [value, options]);

  function handleChange(event) {
    setValue(event.target.value);
    onChange(event.target.value);
  }

  function handleBlur() {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  }

  function handleOptionClick(option) {
    setValue(option);
    setIsOpen(false);
    onChange(option);
  }

  return (
    <div className="autocomplete">
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {isOpen && (
        <ul className="options">
          {filteredOptions.map((option) => (
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

export default Autocomlete;
