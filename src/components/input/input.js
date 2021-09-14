import { createElement } from "react";
import "./input.scss";

export default function Input({
  type,
  className = "",
  onChange,
  onValueChange,
  ...props
}) {
  let isTextarea = type === "textarea";

  return createElement(isTextarea ? "textarea" : "input", {
    className: `lui-input ${className}`,
    type: isTextarea ? undefined : type,
    onChange: handleChange,
    ...props,
  });

  function handleChange(e) {
    onChange?.(e);
    onValueChange?.(e.target.value);
  }
}
