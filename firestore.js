// firestore.js - The Database Expert
// This file handles all communication with Firebase.

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc, onSnapshot, collection, query, orderBy, limit, getDocs, addDoc, deleteDoc, where } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// --- Firebase Config and State ---
const firebaseConfig = {
  apiKey: "AIzaSyBgvyb95-jujtCC2HPiHXLdYMJgQquIEx4",
  authDomain: "jadual-3f0aa.firebaseapp.com",
  projectId: "jadual-3f0aa",
  storageBucket: "jadual-3f0aa.appspot.com",
  messagingSenderId: "496526436851",
  appId: "1:496526436851:web:78ff48b28bfc8c31f14a86"
};

let db, auth, userId, appId;
let namesPagiShared = [], namesPetangShared = [];

// --- Initialization ---
export function initFirebase(onAuthChangeCallback) {
    try {
        const app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getFirestore(app);
        appId = firebaseConfig.appId;

        onAuthStateChanged(auth, (user) => {
            if (user) {
                userId = user.uid;
                onAuthChangeCallback(user);
            } else {
                signInAnonymously(auth).catch(err => console.error("Anonymous sign-in failed:", err));
            }
        });
    } catch (e) {
        console.error("Firebase Init Error:", e);
        // Use the callback to signal an error state if needed
        onAuthChangeCallback(null); 
    }
}

// --- Schedule Functions ---
export async function loadLatestSchedule(renderCallback, fallbackCallback) {
    // Your full loadLatestSharedScheduleAsDefault logic goes here
    // On success, call renderCallback(data)
    // On failure or if no data, call fallbackCallback()
    try {
        const q = query(
            collection(db, "artifacts", appId, "public/data/sharedSchedules"),
            where("isBackup", "!=", true),
            orderBy("lastUpdatedAt", "desc"),
            limit(1)
        );
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
            const latestDoc = snapshot.docs[0];
            renderCallback(latestDoc.data());
        } else {
            fallbackCallback();
        }
    } catch (e) {
        console.error("Failed to load latest schedule:", e);
        fallbackCallback();
    }
}

export async function manualSave(state, showMessageCallback) {
    // Your full manualSaveCurrentPage logic here
    // Call showMessageCallback('Message', 'type') on success/failure
    showMessageCallback('Saving...', 'info');
    // ... logic to save to Firestore ...
}


// --- Name List Functions ---
export function listenToSharedNames(session, updateCallback) {
    const docRef = doc(db, "artifacts", appId, "public/data/sharedNameLists", session);
    onSnapshot(docRef, (docSnap) => {
        const names = docSnap.exists() ? docSnap.data().names || [] : [];
        if (session === 'pagi') namesPagiShared = names;
        else namesPetangShared = names;
        updateCallback(session, names);
    });
}

export function getSharedNames() {
    return { pagi: namesPagiShared, petang: namesPetangShared };
}

// ... All other firestore functions from your original script go here
// (saveSharedSchedule, addSharedName, deleteSharedName, importSchedules, etc.)


