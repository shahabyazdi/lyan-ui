import React from "react";
import {
  IconEdit,
  IconTrash,
  IconX,
  IconArrowUpCircle,
  IconArrowDownCircle,
} from "@tabler/icons";
import "./options.scss";

export default function Options({
  onDelete,
  onEdit,
  onClose,
  onMoveUp,
  onMoveDown,
  stroke = 1,
}) {
  return (
    <>
      {onClose && (
        <IconX
          className="lui-option lui-option-close"
          onClick={onClose}
          stroke={stroke}
        />
      )}
      {onEdit && (
        <IconEdit
          className="lui-option lui-option-edit"
          onClick={onEdit}
          stroke={stroke}
        />
      )}
      {onDelete && (
        <IconTrash
          className="lui-option lui-option-delete"
          onClick={onDelete}
          stroke={stroke}
        />
      )}
      <IconArrowUpCircle
        className={`lui-option lui-option-${onMoveUp ? "up" : "disable"}`}
        onClick={onMoveUp}
        stroke={stroke}
      />
      <IconArrowDownCircle
        className={`lui-option lui-option-${onMoveDown ? "down" : "disable"}`}
        onClick={onMoveDown}
        stroke={stroke}
      />
    </>
  );
}
