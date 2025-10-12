import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_CLIENT_APIKEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_CLIENT_AUTHDOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_CLIENT_PROJECTID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_CLIENT_STORAGEBUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_CLIENT_MESSAGEINGSENDERID,
  appId: import.meta.env.PUBLIC_FIREBASE_CLIENT_APPID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_CLIENT_MEASUREMENTID,
};

const initApp = () => {
  const PROD = import.meta.env.PROD;

  if (!PROD) {
    return initializeApp(firebaseConfig);
  }

  return initializeApp(firebaseConfig);
};

export const app = initApp();
export const db = getFirestore(app);
export const analytics = isSupported().then(yes => yes ? getAnalytics() : null);
export const auth = getAuth(app);

//connectAuthEmulator(auth, "http://localhost:9099");
//connectFirestoreEmulator(db, '127.0.0.1', 8080);
