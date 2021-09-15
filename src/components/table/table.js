import { createElement } from "react";
import TableLayout from "lyan-ui/componenct/table_layout";
import TabLayout from "lyan-ui/componenct/tab_layout";

export default function Table({ layout = "table", ...props }) {
  return createElement(layout === "tab" ? TabLayout : TableLayout, props);
}
