import React from "react";
import "./button.scss";

export default function Button({
  className = "",
  children,
  small,
  secondary,
  ...props
}) {
  const classNames = ["lui-button", className];

  if (small) classNames.push("lui-small");
  if (secondary) classNames.push("lui-secondary");

  return (
    <button className={classNames.join(" ")} {...props}>
      {children}
    </button>
  );
}
