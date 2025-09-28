// firestore.js - The Database Expert

// This module handles all communication with Firebase.
// It imports UI functions to display the data it fetches.
import * as ui from './ui.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, collection, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

let db;
let auth;

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBgvyb95-jujtCC2HPiHXLdYMJgQquIEx4",
  authDomain: "jadual-3f0aa.firebaseapp.com",
  projectId: "jadual-3f0aa",
  storageBucket: "jadual-3f0aa.appspot.com",
  messagingSenderId: "496526436851",
  appId: "1:496526436851:web:78ff48b28bfc8c31f14a86"
};

export function initFirebase(onAuthChange) {
    try {
        const app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getFirestore(app);
        
        onAuthStateChanged(auth, (user) => {
            if (user) {
                onAuthChange(user);
            } else {
                signInAnonymously(auth);
            }
        });
    } catch (e) {
        console.error("Firebase Init Error:", e);
        ui.showMessage("Could not connect to Firebase.", "error");
    }
}

export async function loadLatestSchedule() {
    // Your complex logic to find and load the latest schedule from Firestore.
    // It should end by calling ui.renderSchedule(data).
    ui.showMessage("Loading latest schedule...", "info");
    try {
        const q = query(
            collection(db, "schedules"), // Adjust path as needed
            orderBy("lastUpdatedAt", "desc"),
            limit(1)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const latestDoc = querySnapshot.docs[0];
            ui.renderSchedule(latestDoc.data());
            ui.showMessage("Latest schedule loaded!", "success");
        } else {
            // No schedule found, maybe render a default empty one
            ui.showMessage("No schedule found, starting new.", "info");
        }
    } catch (e) {
        console.error("Error loading schedule:", e);
        ui.showMessage("Error loading schedule.", "error");
    }
}

export async function manualSave(state) {
    // Your logic to save the current state to Firestore.
    ui.showMessage("Saving...", "info");
    try {
        // Assume we have a current document ID stored somewhere
        const docId = "some-current-doc-id"; // You need to manage this ID
        await setDoc(doc(db, "schedules", docId), state, { merge: true });
        ui.showMessage("Page Saved!", "success");
    } catch (e) {
        console.error("Error saving page:", e);
        ui.showMessage("Error saving page.", "error");
    }
}

// ... Add all other Firestore functions from your original file.
// (e.g., saveSharedSchedule, loadSharedNames, deleteSchedule, etc.)

