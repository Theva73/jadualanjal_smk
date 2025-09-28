# Jadual Anjal — Module Base

This refactor splits the monolithic HTML+script into ES modules:

- `js/firebase.js` – bootstrap and export `firestore()` and `firebaseAuth()`.
- `js/auth.js` – anonymous sign-in and `onAuthReady()` callback.
- `js/names_store.js` – Firestore CRUD for shared name lists (sessions: `pagi`, `petang`).
- `js/schedule_ui.js` – starter wiring for the schedule page (add your merge/summary/pdf/excel logic here).

Separate admin/maintenance UI for Names:
- `names.html` is a **standalone** page that manages the shared name lists and connects to the same Firestore project.

Firebase config is already filled with your provided keys.

## Firestore data model

```
name_sessions/
  pagi   { names: [ "ALICE", "BOB", ... ] }
  petang { names: [ "CAROL", "DAVID", ... ] }
```

This keeps the Name List **off** the main page and makes it easy to maintain.

## How to run

Open `index.html` for the schedule.
Open `names.html` for managing names (also linked from a button on the schedule page, opening a new tab).

> Note: migrate the rest of your original inline logic into dedicated modules inside `js/`.
> The file `JadualAnjal (original).txt` you shared contained extensive UI/logic (merge/unmerge, backup/restore, PDF/Excel, summary table). Those should be moved into additional modules e.g. `merge.js`, `summary.js`, `pdf.js`, `excel.js`, `storage.js` following the same pattern.
