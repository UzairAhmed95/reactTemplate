import React from "react";

const Checkbox = ({ title, value, onChange }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={value}
        id="flexCheckDefault"
        onChange={onChange}
      />
      {title === true ? (
        <label className="form-check-label" for="flexCheckDefault">
          {title}
        </label>
      ) : null}
    </div>
  );
};

export default Checkbox;
