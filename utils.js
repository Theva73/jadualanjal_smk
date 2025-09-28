// Shared tiny helpers. Move your common UI helpers here and export them.

export function $(sel, root=document) { return root.querySelector(sel); }
export function $all(sel, root=document) { return Array.from(root.querySelectorAll(sel)); }

export function sleep(ms){ return new Promise(r=>setTimeout(r, ms)); }

// Example message helper you can adopt:
// export function showMessage(text, type='info') { /* ... */ }
