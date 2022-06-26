import React from "react";

const Dropdown1 = ({ value, options, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      /* id="dropdown-basic-button" */
      className="currConverterDropdown"
    >
      {options.map((option, index) => (
        <option value={option.currAbbreviation} key={index}>
          {option.currName}
        </option>
      ))}
    </select>
  );
};

export default Dropdown1;
