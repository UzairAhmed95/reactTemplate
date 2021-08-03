import React from "react";

const Dropdown = ({ label, name, onChange, smallLabel, options }) => {
  return (
    <div class="position-relative form-group">
      <label for="exampleSelect" className="">
        {label}
      </label>
      <select
        name="select"
        id="exampleSelect"
        className="form-control"
        onChange={(e) => onChange(e, name)}
      >
        <option>Select Option</option>
        {options && options.map((option) => <option>{option}</option>)}
      </select>
      {smallLabel === null ? null : (
        <div id="emailHelp" className="form-text">
          {smallLabel}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
