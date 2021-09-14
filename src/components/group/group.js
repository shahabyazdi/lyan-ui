import React from "react";
import List from "../list/list";
import Section from "../section/section";
import FormGroup from "../form_group/form_group";
import FloatPanel from "../float_panel/float_panel";
import Fieldset from "../fieldset/fieldset";
import Accordion from "../accordion/accordion";
import FloatModal from "../float_modal/float_modal";

export default function Group({ type, children, ...props }) {
  switch (type) {
    case "list":
      return <List {...props}>{children}</List>;
    case "section":
      return <Section {...props}>{children}</Section>;
    case "form group":
      return <FormGroup {...props}>{children}</FormGroup>;
    case "float panel":
      return <FloatPanel {...props}>{children}</FloatPanel>;
    case "fieldset":
      return <Fieldset {...props}>{children}</Fieldset>;
    case "accordion":
      return <Accordion {...props}>{children}</Accordion>;
    case "float modal":
      return <FloatModal {...props}>{children}</FloatModal>;
    default:
      return <div {...props}>{children}</div>;
  }
}
