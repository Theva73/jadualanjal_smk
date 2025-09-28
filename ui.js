// ui.js - The Visuals
// This file contains ALL functions that read from or write to the DOM.
// It is the largest file because your app has a rich user interface.

// --- State (managed by main.js, passed here as needed) ---
let dom = {}; // To hold references to all our DOM elements
let uiState = {
    selectionMode: false,
    selectedCells: [],
    lastClickedCell: null,
    currentNameListSession: 'pagi',
};

// --- Initialization ---
export function initUI() {
    // Find all the elements we'll need to interact with
    const ids = [
        'scheduleTitle', 'userIdDisplay', 'topActionButtonsBar', 'controlsToggler',
        'collapsibleButtonBars', 'tablesContainer', 'tableTabs', 'summaryTable',
        'summaryTableContainer', 'nameModal', 'nameList', 'restoreBackupModal',
        'restoreBackupListContainer', 'customMessageBox', 'generalLoadingIndicator', 'pdfContent'
    ];
    ids.forEach(id => dom[id] = document.getElementById(id));
    
    // Setup listeners that are internal to the UI (e.g., table clicks)
    if (dom.tablesContainer) {
        dom.tablesContainer.addEventListener('click', handleTableCellClick);
        // Add other complex listeners from your original file here
    }
    
    console.log("UI Initialized and DOM elements cached.");
}

// --- Core UI Functions ---
export function setUserId(id) {
    if (dom.userIdDisplay) dom.userIdDisplay.textContent = `User ID: ${id}`;
}

export function showMessage(message, type = 'info', duration = 3000) {
    // Your original showMessage function
    if (!dom.customMessageBox) return;
    dom.customMessageBox.textContent = message;
    dom.customMessageBox.className = `custom-message-box ${type}`;
    dom.customMessageBox.style.display = 'block';
    setTimeout(() => { dom.customMessageBox.style.display = 'none'; }, duration);
}

export function renderSchedule(scheduleData) {
    if (!dom.tablesContainer || !dom.tableTabs || !dom.scheduleTitle) return;
    
    dom.scheduleTitle.textContent = scheduleData.scheduleTitle;
    dom.tablesContainer.innerHTML = scheduleData.html;
    
    // Re-create tabs
    dom.tableTabs.innerHTML = '';
    dom.tablesContainer.querySelectorAll('table').forEach(table => {
        const id = table.id;
        const name = table.dataset.tableName || `Sheet`;
        addTabButton(id, name);
    });

    // Activate the correct tab
    const activeId = scheduleData.activeTableId || dom.tablesContainer.querySelector('table')?.id;
    if (activeId) {
        switchTable(activeId);
    }

    rebuildAndRenderSummary();
}

export function setupInitialTable() {
    // This function creates a new, empty table when no data is loaded
    if (dom.tablesContainer.innerHTML.trim() === '') {
        addNewTable(true); // isInitial = true
    }
}


// --- All your other UI functions from the original file go here ---
// For example:
export function rebuildAndRenderSummary() { /* ... your summary logic ... */ }
export function addTabButton(id, label) { /* ... your tab button logic ... */ }
export function switchTable(id) { /* ... your switch table logic ... */ }
export function addNewTable(isInitial = false) { /* ... your add table logic ... */ }
export function toggleButtonBars() { dom.collapsibleButtonBars.classList.toggle('hidden'); }
export function generatePdf() { /* ... your pdf logic ... */ }
export function clearAllScheduledNames(sharedNames) { /* ... your clear names logic ... */ }

// ... and so on for every function that touched the DOM in your original file.
// handleTableCellClick, mergeSelectedCells, toggleNameModal, etc.

// Make sure to define all functions before they are used or export them.
function handleTableCellClick(event) {
    const cell = event.target.closest('td, th');
    if (!cell) return;
    uiState.lastClickedCell = cell;
    // ... rest of your logic
}


