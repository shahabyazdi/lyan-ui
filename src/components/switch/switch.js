import React from "react";
import "./switch.scss";

export default function Switch({
  value,
  onChange,
  onValueChange,
  className = "",
  ...props
}) {
  props.type = "checkbox";

  return (
    <label className={`lui-switch ${className}`}>
      <input
        checked={value}
        onChange={(e) => {
          onChange?.(e);
          onValueChange?.(e.target.checked);
        }}
        {...props}
      />
      <span className={`lui-slider lui-round ${value ? "active" : ""}`} />
    </label>
  );
}
