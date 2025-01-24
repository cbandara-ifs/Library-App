import React from "react";
import PropTypes from "prop-types";
import { SelectInputProps } from "../../lib/interfaces";

const SelectInput : React.FC<SelectInputProps>  = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
        >
          <option value="">{defaultOption}</option>
          {options.map((option : { value: string | number; text: string }) => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default SelectInput;
