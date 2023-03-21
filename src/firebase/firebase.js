import firebaseConfig from "../data/firebase.config";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
    getAuth,
    GoogleAuthProvider,
    setPersistence,
    browserLocalPersistence,
    signInWithPopup,
} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Persist Auth
setPersistence(auth, browserLocalPersistence).then(() =>
    signInWithPopup(auth, provider),
);

export default db;
