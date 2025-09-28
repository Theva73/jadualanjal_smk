// Minimal schedule UI wiring (you can extend this by moving more logic here)
import { loadNamesForSession } from './names_store.js';

export function initScheduleUI(){
  // Basic toggler to show/hide toolbars
  const toggler = document.getElementById('controlsToggler');
  const bar = document.getElementById('collapsibleButtonBars');
  if (toggler && bar){
    toggler.addEventListener('click', () => {
      const open = bar.classList.toggle('open');
      toggler.setAttribute('aria-expanded', String(open));
      toggler.textContent = open ? 'Hide Controls' : 'Show Controls';
    });
  }

  // Example: simple autocomplete for active cell (skeleton)
  const tablesContainer = document.getElementById('tablesContainer');
  if (tablesContainer){
    tablesContainer.addEventListener('focusin', async (e) => {
      if (e.target && e.target.tagName === 'TD' && e.target.isContentEditable){
        // preload names (pagi by default)
        await loadNamesForSession('pagi');
        // Hook your autocomplete here later
      }
    });
  }

  // TODO: migrate the rest of your original inline logic into modules (merge/unmerge, save/load, summary, pdf/excel, etc)
}
