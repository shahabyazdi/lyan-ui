import React from "react";
import Pagination from "./pagination";
import "./tab_layout.scss";

export default function TabLayout({ children, ...props }) {
  return (
    <div className="lui-tab-layout">
      <Pagination {...props} />
      {children}
    </div>
  );
}
