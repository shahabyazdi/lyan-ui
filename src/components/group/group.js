import React from "react";
import List from "lyan-ui/components/list";
import Section from "lyan-ui/components/section";
import FormGroup from "lyan-ui/components/form_group";
import FloatPanel from "lyan-ui/components/float_panel";
import Fieldset from "lyan-ui/components/fieldset";
import Accordion from "lyan-ui/components/accordion";
import FloatModal from "lyan-ui/components/float_modal";

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
