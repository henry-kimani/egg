import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const clientEnv = import.meta.env;

const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_CLIENT_APIKEY,
  authDomain: import.meta.env.FIREBASE_CLIENT_AUTHDOMAIN,
  projectId: import.meta.env.FIREBASE_CLIENT_PROJECTID,
  storageBucket: import.meta.env.FIREBASE_CLIENT_STORAGEBUCKET,
  messagingSenderId: import.meta.env.FIREBASE_CLIENT_MESSAGEINGSENDERID,
  appId: import.meta.env.FIREBASE_CLIENT_APPID,
  measurementId: import.meta.env.FIREBASE_CLIENT_MEASUREMENTID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

