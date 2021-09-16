import React from "react";
import Select from "lyan-ui/components/select";
import MultiSelect from "lyan-ui/components/multi_select";
import Table from "lyan-ui/components/table";
import Group from "lyan-ui/components/group";
import FormControl from "lyan-ui/components/form_control";

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
