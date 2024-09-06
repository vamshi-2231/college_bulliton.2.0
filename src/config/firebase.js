import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "collegeb-6cfe5.firebaseapp.com",
    projectId: "collegeb-6cfe5",
    storageBucket: "collegeb-6cfe5.appspot.com",
    messagingSenderId: "815272939654",
    appId: "1:815272939654:web:eca8a1682611b86247c107"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
