import React from "react";
import "./Button.css";

const Button = ({ variant, label, onClick }) => {
  const buttonClassName =
    variant === "primary" ? "button-primary" : "button-secondary";

  return (
    <button className={`button ${buttonClassName}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
