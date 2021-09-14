import React from "react";
import "./form_group.scss";

export default function FormGroup({
  title,
  children,
  className = "",
  ...props
}) {
  return (
    <div className={`lui-form-group ${className}`} {...props}>
      <label>{title} :</label>
      {children}
    </div>
  );
}
