import React from "react";
import "./fields.scss";

function Item({ className = "", children, ...props }) {
  return (
    <div className={`lui-field ${className}`} {...props}>
      {children}
    </div>
  );
}

function Name({ className = "", children, ...props }) {
  return (
    <div className={`lui-field-name ${className}`} {...props}>
      {children}
    </div>
  );
}

function Element({ className = "", children, ...props }) {
  return (
    <div className={`lui-field-element ${className}`} {...props}>
      {children}
    </div>
  );
}

function Options({ className = "", children, ...props }) {
  return (
    <div className="lui-field-options" {...props}>
      {children}
    </div>
  );
}

function Fields({ className = "", children, shadow = true, rtl, ...props }) {
  const classNames = ["lui-fields", className];

  if (shadow) classNames.push("lui-shadow");
  if (rtl) classNames.push("lui-rtl");

  return (
    <div className={classNames.join(" ")} {...props}>
      {children}
    </div>
  );
}

export default Object.assign(Fields, {
  Item,
  Name,
  Element,
  Options,
});
