// main.js - The Conductor
// This file connects the HTML to the logic in the other modules.

import * as ui from './ui.js';
import * as firestore from './firestore.js';

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize the UI (find all DOM elements)
    ui.initUI();
    
    // 2. Initialize Firebase and define what happens on authentication change
    firestore.initFirebase((user) => {
        if (user) {
            ui.setUserId(user.uid);
            // After successful auth, listen for name lists and load the schedule
            firestore.listenToSharedNames('pagi', ui.updateNameList);
            firestore.listenToSharedNames('petang', ui.updateNameList);
            firestore.loadLatestSchedule(ui.renderSchedule, ui.setupInitialTable);
        } else {
            ui.setUserId('Authenticating...');
        }
    });

    // 3. Setup all button event listeners
    setupEventListeners();
});

// --- Event Listeners Setup ---
function setupEventListeners() {
    // This function connects every button to its action in either ui.js or firestore.js
    const listeners = {
        // Top Bar
        'controlsToggler': ui.toggleButtonBars,
        'manualSaveBtn': () => firestore.manualSave(ui.captureCurrentState(), ui.showMessage),
        'downloadPdfBtn': ui.generatePdf,
        'clearScheduledNamesBtn': () => ui.clearAllScheduledNames(firestore.getSharedNames()),

        // Collapsible Controls
        'directCopyFullHtmlBtn': ui.copyFullHtml,
        'excelBtnTrigger': ui.exportActiveTableToExcel,
        'importExcelBtn': () => document.getElementById('fileInput').click(),
        'saveSharedScheduleBtn': () => firestore.saveSharedSchedule(ui.captureCurrentState(), ui.showMessage),
        'loadSharedScheduleBtn': () => firestore.loadAndRenderSharedSchedules(ui.renderSharedScheduleList),
        'restoreBackupBtn': ui.toggleRestoreBackupModal,
        'exportSharedSchedulesBtn': () => firestore.exportAllSchedules(ui.showMessage),
        'importSharedSchedulesBtn': () => document.getElementById('sharedScheduleImportFile').click(),
        'clearAndResetScheduleBtn': ui.clearAndReset,

        // Cell/Table Manipulation
        'selectBtn': ui.toggleCellSelectionMode,
        'mergeBtn': ui.mergeSelectedCells,
        'deselectBtn': ui.deselectAllCells,
        'unmergeBtn': ui.unmergeActiveCell,
        'addTableBtn': ui.addNewTable,
        'addIndependentTableBtn': ui.addNewIndependentTable,
        'renameTableBtn': ui.renameActiveTable,
        'deleteTableBtn': ui.deleteActiveTable,
        'nameListBtn': ui.toggleNameModal,

        // Row/Col Manipulation
        'addRowAboveBtn': ui.addRowAbove,
        'addRowBelowBtn': ui.addRowBelow,
        'addColLeftBtn': ui.addColLeft,
        'addColRightBtn': ui.addColRight,
        'deleteRowBtn': ui.deleteRow,
        'deleteColBtn': ui.deleteCol,

        // Modals
        'closeRestoreBackupModalBtn': ui.toggleRestoreBackupModal,
        'closeNameModalBtnStandard': ui.toggleNameModal,
        'addNameBtnInModal': () => {
            const input = document.getElementById('newNameInput');
            if(input.value) firestore.addSharedName(input.value, ui.showMessage);
            input.value = '';
        },
        'importNameListBtn': () => document.getElementById('nameListImportFile').click(),
        'namePagiTab': () => ui.switchNameListTab('pagi'),
        'namePetangTab': () => ui.switchNameListTab('petang'),
    };

    for (const id in listeners) {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('click', listeners[id]);
        } else {
            console.warn(`Element with ID '${id}' not found for event listener.`);
        }
    }
    
    // File inputs
    document.getElementById('fileInput').addEventListener('change', ui.handleExcelImport);
    document.getElementById('sharedScheduleImportFile').addEventListener('change', (e) => firestore.importSchedules(e, ui.showMessage));
    document.getElementById('nameListImportFile').addEventListener('change', (e) => firestore.importNameList(e, ui.showMessage));

    // Other dynamic listeners (for tables, etc.) are handled in ui.js
    console.log("All event listeners have been set up.");
}


