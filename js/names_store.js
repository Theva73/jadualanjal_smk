// Firestore CRUD for shared name lists
import { firestore } from './firebase.js';
import {
  doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

const SESSIONS = ['pagi', 'petang'];
let activeSession = 'pagi';

export function setActiveSession(s){
  if (!SESSIONS.includes(s)) throw new Error("Invalid session: " + s);
  activeSession = s;
}
export function getActiveSession(){ return activeSession; }

function sessionDocRef(session){
  const db = firestore();
  return doc(db, 'name_sessions', session);
}

// Ensure doc exists
async function ensureSessionDoc(session){
  const ref = sessionDocRef(session);
  const snap = await getDoc(ref);
  if (!snap.exists()){
    await setDoc(ref, { names: [] });
  }
}

export async function listNames(session){
  const ref = sessionDocRef(session);
  const snap = await getDoc(ref);
  const data = snap.exists() ? snap.data() : { names: [] };
  return Array.isArray(data.names) ? data.names.slice().sort((a,b)=>a.localeCompare(b)) : [];
}

export async function addName(session, name){
  await ensureSessionDoc(session);
  const ref = sessionDocRef(session);
  await updateDoc(ref, { names: arrayUnion(name) });
}

export async function removeName(session, name){
  await ensureSessionDoc(session);
  const ref = sessionDocRef(session);
  await updateDoc(ref, { names: arrayRemove(name) });
}

export async function importNamesFromTxt(session, file){
  const txt = await file.text();
  const names = txt.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  if (!names.length) return;
  await ensureSessionDoc(session);
  // arrayUnion can't bulk-add variable length easily; do sequential
  for (const n of names){
    await addName(session, n);
  }
}

// Optional: load names without UI (e.g., for autocomplete hooks)
export async function loadNamesForSession(session){
  return await listNames(session);
}
