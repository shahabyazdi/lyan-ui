import React from "react";
import NewRow from "./new_row";
import Pagination from "./pagination";
import "./table_layout.scss";

export { default as getPageData } from "./getPageData";

export default function TableLayout({
  className = "",
  head = [],
  renderHead = true,
  newRow,
  onNewRow,
  children,
  page,
  setPage,
  lastIndex,
  lastPage,
  totalRows,
  rowsPerPage,
  rtl,
  labels = {
    Rows: "Rows",
    Page: "Page",
    Of: "Of",
  },
  digits,
  ...props
}) {
  return (
    <table
      className={`lui-table ${rtl ? "lui-rtl" : ""} ${className}`}
      {...props}
    >
      {renderHead && (
        <thead>
          <tr>
            {head.map(({ name }, index) => (
              <td key={index}>{name}</td>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {children}
        {newRow && page === lastPage && (
          <NewRow colSpan={head.length} onClick={onNewRow} />
        )}
        {page !== undefined && (
          <Pagination
            page={page}
            setPage={setPage}
            colSpan={head.length}
            lastIndex={lastIndex}
            lastPage={lastPage}
            totalRows={totalRows}
            rowsPerPage={rowsPerPage}
            rtl={rtl}
            labels={labels}
            digits={digits}
          />
        )}
      </tbody>
    </table>
  );
}
