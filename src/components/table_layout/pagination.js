import React from "react";
import Input from "lyan-ui/components/number";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsRight,
  IconChevronsLeft,
} from "@tabler/icons";
import toLocaleDigits from "../../shared/toLocaleDigits";

export default function Pagination({
  colSpan,
  rowsPerPage,
  page,
  lastIndex,
  lastPage,
  totalRows,
  setPage,
  rtl,
  labels,
  digits,
}) {
  let Left = rtl ? IconChevronRight : IconChevronLeft;
  let Lefts = rtl ? IconChevronsRight : IconChevronsLeft;
  let Right = rtl ? IconChevronLeft : IconChevronRight;
  let Rights = rtl ? IconChevronsLeft : IconChevronsRight;

  return (
    <tr className="lui-pagination">
      <td colSpan={colSpan}>
        <div style={{ display: "flex" }}>
          <div className="lui-data lui-rows-data">
            {labels.Rows} {toLocale(rowsPerPage * (page - 1) + 1)} -{" "}
            {toLocale(lastIndex)} {labels.Of} {toLocale(totalRows)}
          </div>
          <div style={{ display: "flex" }}>
            <Lefts
              className={`row-option ${page === 1 ? "disabled" : ""}`}
              style={{ marginBottom: "5px" }}
              onClick={() => {
                if (page <= 1) return;

                setPage(1);
              }}
            />
            <Left
              className={`row-option ${page === 1 ? "disabled" : ""}`}
              style={{ marginBottom: "5px" }}
              onClick={() => {
                if (page <= 1) return;

                setPage(page - 1);
              }}
            />
            <Input
              value={page}
              digits={digits}
              onValueChange={(page) => {
                page = Number(page);

                if (isNaN(page) || page < 1 || page > lastPage) return;

                setPage(page);
              }}
            />
            <Right
              className={`row-option ${page === lastPage ? "disabled" : ""}`}
              onClick={() => {
                if (page >= lastPage) return;

                setPage(page + 1);
              }}
            />
            <Rights
              className={`row-option ${page === lastPage ? "disabled" : ""}`}
              onClick={() => {
                if (page >= lastPage) return;

                setPage(lastPage);
              }}
            />
          </div>
          <div className="lui-data lui-page-data">
            {labels.Page} {toLocale(page)} {labels.Of} {toLocale(lastPage)}
          </div>
        </div>
      </td>
    </tr>
  );

  function toLocale(value) {
    return toLocaleDigits(value, digits);
  }
}
