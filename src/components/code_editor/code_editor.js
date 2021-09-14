import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/themes/prism.css";
import "./code_editor.scss";

require("prismjs/components/prism-jsx");

export default function CodeEditor({
  value,
  language = "js",
  className = "",
  onChange,
  onValueChange,
  ...props
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`lui-code-editor ${focused ? "lui-focused" : ""} ${className}`}
      {...props}
    >
      <Editor
        value={value}
        padding={focused ? 7 : 8}
        onValueChange={onValueChange}
        onChange={onChange}
        highlight={(code) => highlight(code, languages[language])}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ minHeight: "100px" }}
      />
    </div>
  );
}
