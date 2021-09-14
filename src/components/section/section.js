import React from "react";
import "./section.scss";

export default function Section({ children, className = "", ...props }) {
  return (
    <section className={`lui-section ${className}`} {...props}>
      {children}
    </section>
  );
}
