// main.js - The Conductor

// Import specialized functions from our new modules
import * as ui from './ui.js';
import * as firestore from './firestore.js';

// --- Global State ---
let state = {
    activeTableId: 'tbl_1',
    selectionMode: false,
    selectedCells: [],
    lastClickedCell: null,
    // ... other state variables from your original file
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Firebase
    firestore.initFirebase((user) => {
        if (user) {
            ui.setUserId(user.uid);
            // Once authenticated, load the initial data
            firestore.loadLatestSchedule();
        } else {
            ui.setUserId('Authenticating...');
        }
    });

    // 2. Setup all button event listeners
    setupEventListeners();

    // 3. Initial UI setup
    ui.initializeUI();
});

// --- Event Listeners Setup ---
function setupEventListeners() {
    // --- Top Bar ---
    document.getElementById('controlsToggler').addEventListener('click', ui.toggleButtonBars);
    document.getElementById('manualSaveBtn').addEventListener('click', () => firestore.manualSave(ui.captureCurrentState()));
    document.getElementById('downloadPdfBtn').addEventListener('click', ui.generatePdf);
    document.getElementById('clearScheduledNamesBtn').addEventListener('click', ui.clearAllNames);
    document.getElementById('searchTimetableBtn').addEventListener('click', ui.showSearchPanel);

    // --- Other Buttons (Example) ---
    document.getElementById('addTableBtn').addEventListener('click', ui.addNewTable);
    document.getElementById('nameListBtn').addEventListener('click', ui.toggleNameModal);
    
    // ... add listeners for ALL other buttons, connecting them to functions in ui.js or firestore.js
    // For example:
    // document.getElementById('mergeBtn').addEventListener('click', () => ui.mergeCells(state));

    // --- Table Interaction ---
    const tablesContainer = document.getElementById('tablesContainer');
    tablesContainer.addEventListener('click', (e) => {
        const cell = e.target.closest('td, th');
        if (cell) {
            state.lastClickedCell = cell;
            if (state.selectionMode) {
                ui.toggleCellSelection(cell, state);
            }
        }
    });
}

