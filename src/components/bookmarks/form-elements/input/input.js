import React from 'react';

import './input.css';

// reusable input field for Redux From
const Input = ({
  type, placeholder, meta, input,
}) => (
  <div>
    <input
      type={type}
      placeholder={placeholder}
      className="form-input"
      {...input}
    />
    <p>{meta.touched ? meta.error : ''}</p>
  </div>
);

export default Input;
