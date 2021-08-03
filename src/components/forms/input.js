import React from "react";

const Input = ({ onChange, placeholder, label, type, name }) => {
  return (
    <div className="position-relative form-group">
      <label for="exampleEmail" className="">
        {label}
      </label>
      <input
        name="email"
        placeholder={placeholder}
        type={type}
        onChange={(e) => onChange(e, name)}
        className="form-control"
      />
    </div>
  );
};

export default Input;
