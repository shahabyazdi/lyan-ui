import FormGroup from "../../../form_group/form_group";
import Element from "../../element";
import { calculate } from "../../../../utils/conditions";

export default function Total({ schemas, rows }) {
  if (rows.length === 0 || schemas.every((schema) => !schema.total)) {
    return null;
  }

  return (
    <div className="total">
      {schemas.map((schema, index) => (
        <FormGroup
          key={index}
          title={schema.total}
          style={{ visibility: schema.total ? "visible" : "hidden" }}
        >
          <Element
            element="input"
            type="number"
            value={calculate(
              rows.map((row) => row[index]),
              schema.total
            )}
            readOnly
          />
        </FormGroup>
      ))}
    </div>
  );
}
