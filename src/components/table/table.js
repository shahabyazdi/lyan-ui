import { createElement } from "react";
import TableLayout from "./table_layout/table_layout";
import TabLayout from "./tab_layout/tab_layout";

export default function Table({ layout = "table", ...props }) {
  return createElement(layout === "tab" ? TabLayout : TableLayout, props);
}
