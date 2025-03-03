import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const clientEnv = import.meta.env;

const firebaseConfig = {
  apiKey: clientEnv.FIREBASE_CLIENT_APIKEY,
  authDomain: clientEnv.FIREBASE_CLIENT_AUTHDOMAIN,
  projectId: clientEnv.FIREBASE_CLIENT_PROJECTID,
  storageBucket: clientEnv.FIREBASE_CLIENT_STORAGEBUCKET,
  messagingSenderId: clientEnv.FIREBASE_CLIENT_MESSAGEINGSENDERID,
  appId: clientEnv.FIREBASE_CLIENT_APPID,
  measurementId: clientEnv.FIREBASE_CLIENT_MEASUREMENTID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

