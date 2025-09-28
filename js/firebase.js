// Firebase bootstrap (ES Modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

let app = null;
let db = null;
let auth = null;

const userProvidedFirebaseConfig = {
  "apiKey": "AIzaSyBgvyb95-jujtCC2HPiHXLdYMJgQquIEx4",
  "authDomain": "jadual-3f0aa.firebaseapp.com",
  "projectId": "jadual-3f0aa",
  "storageBucket": "jadual-3f0aa.firebasestorage.app",
  "messagingSenderId": "496526436851",
  "appId": "1:496526436851:web:78ff48b28bfc8c31f14a86"
};

export function initFirebase(configOverride=null) {
  if (app) return app;
  const cfg = configOverride || userProvidedFirebaseConfig;
  app = initializeApp(cfg);
  db = getFirestore(app);
  auth = getAuth(app);
  console.log("[firebase] initialized:", cfg.projectId);
  return app;
}

export function firestore() { return db; }
export function firebaseAuth() { return auth; }
