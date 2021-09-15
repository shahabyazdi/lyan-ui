export default function getPageData({ rows = [], page = 1, rowsPerPage = 10 }) {
  const availbleRows = [];
  const totalRows = rows.length;
  const lastPage = (((totalRows - 1) / rowsPerPage) | 0) + 1;

  let index = rowsPerPage * (page - 1);
  let lastIndex = rowsPerPage * (page - 1) + rowsPerPage;

  if (lastIndex > totalRows) lastIndex = totalRows;

  while (index < lastIndex) {
    availbleRows.push({
      row: rows[index],
      rowIndex: index,
    });

    index++;
  }

  return [availbleRows, { lastIndex, lastPage, totalRows, rowsPerPage }];
}
