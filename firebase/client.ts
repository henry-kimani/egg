import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getApps } from "firebase/app";

const activeApps = getApps();

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_CLIENT_APIKEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_CLIENT_AUTHDOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_CLIENT_PROJECTID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_CLIENT_STORAGEBUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_CLIENT_MESSAGEINGSENDERID,
  appId: import.meta.env.PUBLIC_FIREBASE_CLIENT_APPID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_CLIENT_MEASUREMENTID,
};

const initApp = () => {
  if (!import.meta.env.PROD) {
    return initializeApp(firebaseConfig);
  }

  return initializeApp();
};

export const app = initApp();
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
