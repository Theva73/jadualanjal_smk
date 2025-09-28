// main.js - The Conductor
// This file connects the HTML to the logic in the other modules.

// Import the full UI and Firestore modules
import * as ui from './ui.js';
import * as firestore from './firestore.js';

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize the UI module (which finds all DOM elements)
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
        } else {
            // This runs if auth is in progress or fails
            ui.setUserId('Authenticating...');
            ui.setupInitialTableState(); // Show a blank table while waiting
        }
    });

    // 3. Setup all button and input event listeners
    setupEventListeners();
});

// --- Event Listeners Setup ---
function setupEventListeners() {
    // This function connects every button to its corresponding action.
    const listeners = {
        'controlsToggler': ui.toggleButtonBarsVisibility,
        'manualSaveBtn': firestore.manualSaveCurrentPage,
        'downloadPdfBtn': ui.generateSchedulePdf,
        'clearScheduledNamesBtn': ui.clearScheduledNamesFromAllTables,
        'searchTimetableBtn': ui.toggleTimetablePanel,
        'directCopyFullHtmlBtn': ui.attemptDirectCopyToClipboard,
        'excelBtnTrigger': ui.exportActiveTableToExcel,
        'importExcelBtn': () => document.getElementById('fileInput').click(),
        'saveSharedScheduleBtn': firestore.saveSharedScheduleToFirestore,
        'loadSharedScheduleBtn': firestore.loadAndRenderSharedSchedulesFromFirestore,
        'restoreBackupBtn': ui.toggleRestoreBackupModalVisibility,
        'exportSharedSchedulesBtn': firestore.exportAllSharedSchedulesFromFirestore,
        'importSharedSchedulesBtn': () => document.getElementById('sharedScheduleImportFile').click(),
        'clearAndResetScheduleBtn': ui.confirmAndResetSchedule,
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
        'closeRestoreBackupModalBtn': ui.toggleRestoreBackupModalVisibility,
        'closeNameModalBtnStandard': ui.toggleNameListModalVisibility,
        'addNameBtnInModal': firestore.addNameToSharedSessionInFirestore,
        'importNameListBtn': () => document.getElementById('nameListImportFile').click(),
        'namePagiTab': () => ui.handleNameListSessionSwitch('pagi'),
        'namePetangTab': () => ui.handleNameListSessionSwitch('petang'),
        'closeTimetablePanel': ui.toggleTimetablePanel,
    };

    for (const id in listeners) {
        document.getElementById(id)?.addEventListener('click', listeners[id]);
    }
    
    // File inputs
    document.getElementById('fileInput')?.addEventListener('change', ui.handleExcelFileImport);
    document.getElementById('sharedScheduleImportFile')?.addEventListener('change', firestore.handleSharedSchedulesImport);
    document.getElementById('nameListImportFile')?.addEventListener('change', firestore.handleNameListImportFirestore);

    console.log("All event listeners set up from main.js.");
}


