import React from "react";

const ValidationError = ({ error }) => {
  return error ? (
    <span className="error-message">необхiдно заповнити поле*</span>
  ) : null;
};

export default ValidationError;
