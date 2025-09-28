// Central place for your Firebase config. 
// Will use window.__firebase_config if provided, otherwise falls back to embedded object.

export const FIREBASE_CONFIG = (typeof window !== 'undefined' && window.__firebase_config)
  ? window.__firebase_config
  : {
      apiKey: "AIzaSyBgvyb95-jujtCC2HPiHXLdYMJgQquIEx4",
      authDomain: "jadual-3f0aa.firebaseapp.com",
      projectId: "jadual-3f0aa",
      storageBucket: "jadual-3f0aa.firebasestorage.app",
      messagingSenderId: "496526436851",
      appId: "1:496526436851:web:78ff48b28bfc8c31f14a86"
    };
