import React from "react";
import "./Button.css"
import PropTypes from "prop-types"

function Button(props) {
  const { variant = "primary", child, ...rest } = props;

  return <button className={`button ${variant}`} {...rest}></button>;
}

export default Button;

Button.propTypes ={
  className : PropTypes.string,
  children: PropTypes.string,
}