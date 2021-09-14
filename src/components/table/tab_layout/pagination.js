import React from "react";
import Input from "../../number/number";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconPlus,
} from "@tabler/icons";
import toLocaleDigits from "../../../shared/toLocaleDigits";

export default function Pagination({
  page,
  setPage,
  newRow,
  onNewRow,
  lastPage,
  totalRows,
  icons,
  rtl,
  labels = { Page: "Page", Of: "Of" },
  digits,
}) {
  let Left = rtl ? IconChevronRight : IconChevronLeft;
  let Lefts = rtl ? IconChevronsRight : IconChevronsLeft;
  let Right = rtl ? IconChevronLeft : IconChevronRight;
  let Rights = rtl ? IconChevronsLeft : IconChevronsRight;

  return (
    <div
      className={`lui-pagination ${totalRows > 0 ? "lui-border-bottom" : ""}`}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {`${labels.Page} ${toLocale(totalRows > 0 ? page : 0)} ${
          labels.Of
        } ${toLocale(lastPage)}`}
      </div>
      <div className="lui-pages">
        <Lefts
          stroke="1"
          className={`${page === 1 ? "disabled" : ""}`}
          onClick={() => {
            if (page <= 1) return;

            setPage(1);
          }}
        />
        <Left
          className={`${page === 1 ? "disabled" : ""}`}
          stroke="1"
          onClick={() => {
            if (page <= 1) return;

            setPage(page - 1);
          }}
        />
        <Input
          className="lui-page-number"
          value={totalRows >= 0 ? page : 0}
          digits={digits}
          onValueChange={(page) => {
            page = Number(page);

            if (isNaN(page) || page < 1 || page > lastPage) return;

            setPage(page);
          }}
        />
        <Right
          stroke="1"
          className={`${page >= lastPage ? "disabled" : ""}`}
          onClick={() => {
            if (page >= lastPage) return;

            setPage(page + 1);
          }}
        />
        <Rights
          stroke="1"
          className={`${page >= lastPage ? "disabled" : ""}`}
          onClick={() => {
            if (page >= lastPage) return;

            setPage(lastPage);
          }}
        />
      </div>
      <div>
        {icons}
        {newRow && <IconPlus stroke="1" onClick={onNewRow} />}
      </div>
    </div>
  );

  function toLocale(value) {
    return toLocaleDigits(value, digits);
  }
}
