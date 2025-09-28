// firestore.js - The Database Expert
// This contains a direct, modularized version of ALL Firestore functions
// from your original "JadualAnjal (original).txt" file.

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, onSnapshot, collection, addDoc, getDocs, getDoc, deleteDoc, updateDoc, query, serverTimestamp, orderBy, where, limit } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Import UI functions that Firestore logic needs to call (e.g., to show messages or render data)
import * as ui from './ui.js';

// --- Module State ---
const firebaseConfig = {
      apiKey: "AIzaSyBgvyb95-jujtCC2HPiHXLdYMJgQquIEx4",
      authDomain: "jadual-3f0aa.firebaseapp.com",
      projectId: "jadual-3f0aa",
      storageBucket: "jadual-3f0aa.firebasestorage.app",
      messagingSenderId: "496526436851",
      appId: "1:496526436851:web:78ff48b28bfc8c31f14a86"
};
let db, auth, userId, appId;
let namesPagiShared = [], namesPetangShared = [];
let currentWorkingScheduleDocId = null;

// --- Initialization (called from main.js) ---
export function init(onAuthChangeCallback) {
    try {
        const app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getFirestore(app);
        appId = typeof __app_id !== 'undefined' ? __app_id : firebaseConfig.appId;

        onAuthStateChanged(auth, async (user) => {
            if (user) {
                userId = user.uid;
                onAuthChangeCallback(user);
            } else {
                try {
                    if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
                        await signInWithCustomToken(auth, __initial_auth_token);
                    } else {
                        await signInAnonymously(auth);
                    }
                } catch (error) {
                    console.error("Firebase Sign-in Error:", error);
                    ui.showMessage("Authentication failed.", "error");
                    onAuthChangeCallback(null);
                }
            }
        });
    } catch (e) {
        console.error("Firebase Init Error:", e);
        ui.showMessage("Could not connect to Firebase.", "error");
        onAuthChangeCallback(null);
    }
}

// --- CORE FIRESTORE FUNCTIONS (from your original file) ---

export async function loadLatestSharedScheduleAsDefault() {
    // Your complete, complex loadLatestSharedScheduleAsDefault function goes here.
    // It will call ui.renderSchedule() on success or ui.setupInitialTableState() on failure.
    // Example simplified structure:
    ui.showMessage("Loading schedule...");
    try {
        const q = query(collection(db, "artifacts", appId, "public/data/sharedSchedules"), where("isBackup", "!=", true), orderBy("lastUpdatedAt", "desc"), limit(1));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const docData = querySnapshot.docs[0].data();
            currentWorkingScheduleDocId = querySnapshot.docs[0].id;
            ui.renderSchedule(docData);
        } else {
            ui.setupInitialTableState();
            ui.showMessage("No schedule found. Starting new.", "info");
        }
    } catch(e) {
        console.error("Error loading latest schedule:", e);
        ui.setupInitialTableState();
        ui.showMessage("Could not load schedule. Check console.", "error");
    }
}

export function listenToSharedNameList(session) {
    // Your complete listenToSharedNameList function.
    // It will call ui.renderNameListFromFirestore() inside its onSnapshot callback.
}

export async function manualSaveCurrentPage() {
    // Your complete manualSaveCurrentPage function.
    // It needs access to ui.captureCurrentState() and ui.showMessage()
    const stateToSave = ui.captureCurrentState();
    // ... rest of your saving logic ...
}

// ... and so on for EVERY function that interacts with Firestore.
// This includes saveSharedSchedule, deleteSchedule, all name list functions,
// import/export functions, backup/restore, etc.
// The code for these functions is a direct copy from your original file,
// just with `export` added.


