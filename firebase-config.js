// Firebase project configuration.
//
// These values are safe to be public — Firebase security is enforced by the
// Firestore/Storage rules, not by hiding this config. Fill them in from:
// Firebase console → Project settings → Your apps → Web app.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCYSXNkJQfLfJ0Sq2JBM4rmnvqBd2MpHvg",
  authDomain: "dtech-solutions-db-4b416.firebaseapp.com",
  projectId: "dtech-solutions-db-4b416",
  storageBucket: "dtech-solutions-db-4b416.firebasestorage.app",
  messagingSenderId: "1035675593700",
  appId: "1:1035675593700:web:68d20778bd4da64e0175f1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
