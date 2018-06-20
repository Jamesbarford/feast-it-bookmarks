import React from 'react';

import './button.css';

// a reusable From Button
const FormButton = props => (
  <button className="form-button">{props.children}</button>
);

export default FormButton;
