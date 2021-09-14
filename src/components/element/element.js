import React from "react";
import Select from "../select/select";
import MultiSelect from "../multi_select/multi_select";
import Table from "../table/table";
import Group from "../group/group";
import FormControl from "../form_control/form_control";

export default function Element({ element, children, ...props }) {
  switch (element) {
    case "select":
      return <Select {...props} />;
    case "multi select":
      return <MultiSelect {...props} />;
    case "table":
      return <Table {...props}>{children}</Table>;
    case "group":
      return <Group {...props}>{children}</Group>;
    default:
      return <FormControl {...props} />;
  }
}
