import React from "react";
import "./select.scss";

export default function Select({
  className = "",
  onChange,
  onValueChange,
  options = [],
  allowMoreOptions,
  onNewItemRequested,
  emptyOption,
  labels = { More: "More" },
  ...props
}) {
  options = options.map((textValue) => {
    if (!Array.isArray(textValue)) return [textValue, textValue];

    return [textValue[0], textValue[1] ?? textValue[0]];
  });

  if (emptyOption) options.unshift(["-", ""]);

  return (
    <select
      className={`lui-select ${className}`}
      onChange={handleChange}
      {...props}
    >
      {options.map(([text, value], index) => (
        <option key={index} value={value}>
          {text}
        </option>
      ))}
      {allowMoreOptions && (
        <option value={props.id + "__more"}>{labels.More}...</option>
      )}
    </select>
  );

  function handleChange(e) {
    if (props.readOnly) return;
    if (e.target.value === props.id + "__more") {
      return onNewItemRequested?.();
    }

    onChange?.(e);
    onValueChange?.(e.target.value);
  }
}
