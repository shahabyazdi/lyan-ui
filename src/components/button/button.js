import React from "react";
import "./button.scss";

export default function Button({ className = "", children, ...props }) {
  return (
    <button className={`lui-button ${className}`} {...props}>
      {children}
    </button>
  );
}
