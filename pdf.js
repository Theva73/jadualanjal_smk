// Thin PDF helpers around html2pdf.js if you want to centralize usage.
// Keep optional: only import from app.js if you use them.

export function downloadPDF(element, filename='schedule.pdf', options={}) {
  if (typeof html2pdf === 'undefined') {
    console.error('html2pdf not found. Ensure CDN is loaded in index.html');
    return;
  }
  const base = {
    margin: 10,
    filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(Object.assign(base, options)).from(element).save();
}
