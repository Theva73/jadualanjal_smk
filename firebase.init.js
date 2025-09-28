// Firebase initialization wrapper.
// Exports app, auth, db and also mirrors them onto window.* for legacy references in existing code.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import { FIREBASE_CONFIG } from './firebase.config.js';

export const app = initializeApp(FIREBASE_CONFIG);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Legacy globals for existing code paths that may reference db/auth/app directly
if (typeof window !== 'undefined') {
  window.__firebase_config = FIREBASE_CONFIG;
  window.app = window.app || app;
  window.auth = window.auth || auth;
  window.db = window.db || db;
}
