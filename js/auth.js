// Anonymous auth helper
import { firebaseAuth } from './firebase.js';
import { signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

let readyCallbacks = [];
let readyUser = null;

export function ensureAnonymousAuth() {
  const auth = firebaseAuth();
  if (!auth) throw new Error("[auth] Firebase not initialized");
  signInAnonymously(auth).catch((e) => {
    console.error("[auth] anonymous sign-in error:", e);
  });
}

export function onAuthReady(cb){
  if (readyUser) return cb(readyUser);
  readyCallbacks.push(cb);
}

(function wire() {
  const auth = firebaseAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      readyUser = user;
      readyCallbacks.forEach(fn => fn(user));
      readyCallbacks = [];
    }
  });
})();
