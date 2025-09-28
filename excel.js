// Thin Excel helpers around SheetJS if you want to centralize usage.
// Keep optional: only import from app.js if you use them.

export function exportTableToXLSX(table, filename='schedule.xlsx') {
  // Assumes global XLSX from CDN in index.html
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.table_to_sheet(table);
  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  XLSX.writeFile(wb, filename);
}
