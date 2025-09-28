// main.js - The Conductor
// This file connects the HTML to the logic in the other modules.

import * as ui from './ui.js';
import * as firestore from './firestore.js';

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize the UI module (which finds all DOM elements and sets up UI-only listeners)
    ui.init();
    
    // 2. Initialize Firebase. The callback defines what happens after auth.
    firestore.init((user) => {
        if (user) {
            ui.setUserId(user.uid);
            // Once authenticated, start listening to real-time name list updates
            firestore.listenToSharedNameList('pagi');
            firestore.listenToSharedNameList('petang');
            // Then, load the user's latest schedule from the database
            firestore.loadLatestSharedScheduleAsDefault();
            // Start the auto-save timer
            firestore.startAutoSave();
        } else {
            // This runs if auth is in progress or fails
            ui.setUserId('Authenticating...');
            ui.setupInitialTableState(); // Show a blank table while waiting
        }
    });

    // 3. Setup all button and input event listeners that require module functions
    setupEventListeners();
});

// --- Event Listeners Setup ---
function setupEventListeners() {
    // This function connects every button to its corresponding action in the correct module.
    const listeners = {
        'controlsToggler': ui.toggleButtonBarsVisibility,
        'manualSaveBtn': firestore.manualSaveCurrentPage,
        'downloadPdfBtn': ui.generateSchedulePdf,
        'clearScheduledNamesBtn': ui.clearScheduledNamesFromAllTables,
        'directCopyFullHtmlBtn': ui.attemptDirectCopyToClipboard,
        'excelBtnTrigger': ui.exportActiveTableToExcel,
        'importExcelBtn': () => ui.getDomElement('fileInput')?.click(),
        'saveSharedScheduleBtn': firestore.saveSharedScheduleToFirestore,
        'loadSharedScheduleBtn': firestore.loadAndRenderSharedSchedulesFromFirestore,
        'restoreBackupBtn': ui.toggleRestoreBackupModalVisibility,
        'exportSharedSchedulesBtn': firestore.exportAllSharedSchedulesFromFirestore,
        'importSharedSchedulesBtn': () => ui.getDomElement('sharedScheduleImportFile')?.click(),
        'clearAndResetScheduleBtn': firestore.confirmAndResetSchedule,
        'selectBtn': ui.toggleCellSelectionMode,
        'mergeBtn': ui.mergeSelectedTableCells,
        'deselectBtn': ui.deselectAllTableCells,
        'unmergeBtn': ui.unmergeActiveCellIfMerged,
        'addTableBtn': () => ui.addNewTable(),
        'addIndependentTableBtn': ui.addNewIndependentTable,
        'renameTableBtn': ui.promptAndRenameActiveTable,
        'deleteTableBtn': ui.confirmAndDeleteActiveTable,
        'nameListBtn': ui.toggleNameListModalVisibility,
        'addRowAboveBtn': ui.addRowAboveToActiveTable,
        'addRowBelowBtn': ui.addRowBelowToActiveTable,
        'addColLeftBtn': ui.addColumnLeftToActiveTable,
        'addColRightBtn': ui.addColumnRightToActiveTable,
        'deleteRowBtn': ui.deleteClickedRowFromActiveTable,
        'deleteColBtn': ui.deleteClickedColumnFromActiveTable,
        'addNameBtnInModal': () => {
            const newNameInput = ui.getDomElement('newNameInput');
            if(newNameInput) firestore.addNameToSharedSessionInFirestore(newNameInput.value);
        },
        'importNameListBtn': () => ui.getDomElement('nameListImportFile')?.click(),
        'searchTimetableBtn': ui.toggleTimetablePanel,
        'closeTimetablePanel': ui.toggleTimetablePanel,
    };

    for (const id in listeners) {
        const element = ui.getDomElement(id);
        if (element) {
            element.addEventListener('click', listeners[id]);
        } else {
            console.warn(`Event listener setup: Element with ID '${id}' not found.`);
        }
    }
    
    // File inputs are handled in the UI module as they directly trigger UI actions or need UI parsing
    ui.getDomElement('fileInput')?.addEventListener('change', ui.handleExcelFileImport);
    ui.getDomElement('sharedScheduleImportFile')?.addEventListener('change', firestore.handleSharedSchedulesImport);
    ui.getDomElement('nameListImportFile')?.addEventListener('change', firestore.handleNameListImportFirestore);
    
    console.log("All event listeners set up from main.js.");
}


