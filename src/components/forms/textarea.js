import React from "react";

const Textarea = ({ label, placeholder, name, onChange }) => {
  return (
    <div className="position-relative form-group">
      <label for="exampleText" className="">
        {label}
      </label>
      <textarea
        name="text"
        id="exampleText"
        className="form-control"
        rows="4"
        placeholder={placeholder}
        onChange={(e) => onChange(e, name)}
      ></textarea>
    </div>
  );
};

export default Textarea;
