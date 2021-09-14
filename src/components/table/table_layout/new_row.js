import { IconPlus } from "@tabler/icons";

export default function NewRow({ colSpan, onClick }) {
  return (
    <tr className="lui-new-row" onClick={onClick}>
      <td colSpan={colSpan}>
        <div>
          <IconPlus stroke={1} />
        </div>
      </td>
    </tr>
  );
}
