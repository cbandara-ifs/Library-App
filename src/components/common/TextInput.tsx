import React from "react";
import PropTypes from "prop-types";
import { TextInputProps } from "../../lib/interfaces";

const TextInput : React.FC<TextInputProps> = ({ name, label, onChange, placeholder, value, error }) => {
  let wrapperClass = "mb-3";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default TextInput;
