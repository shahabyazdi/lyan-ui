// import { useState, useEffect } from "react";

// export default function usePagination({
//   page: initialPage = 1,
//   rows = [],
//   rowsPerPage = 10,
// }) {
//   const [page, setPage] = useState(initialPage);

//   const availbleRows = [];

//   let index = rowsPerPage * (page - 1);
//   let lastIndex = rowsPerPage * (page - 1) + rowsPerPage;
//   let totalRows = rows.length;
//   let lastPage = (((totalRows - 1) / rowsPerPage) | 0) + 1;

//   if (lastIndex > totalRows) lastIndex = totalRows;

//   while (index < lastIndex) {
//     availbleRows.push({
//       row: rows[index],
//       rowIndex: index,
//     });

//     index++;
//   }

//   return [
//     availbleRows,
//     { page, setPage, lastIndex, lastPage, totalRows, rowsPerPage },
//   ];
// }
