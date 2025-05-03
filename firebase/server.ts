import { type ServiceAccount } from "firebase-admin";
import { getApps, initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const activeApps = getApps();
const envVars = import.meta.env;

const serviceAccount = {
  type: "service_account",
  project_id: envVars.SECRET_FIREBASE_PROJECT_ID,
  private_key_id: envVars.SECRET_FIREBASE_PRIVATE_KEY_ID,
  private_key: envVars.SECRET_FIREBASE_PRIVATE_KEY,
  client_email: envVars.SECRET_FIREBASE_CLIENT_EMAIL,
  client_id: envVars.SECRET_FIREBASE_CLIENT_ID,
  auth_uri: envVars.SECRET_FIREBASE_AUTH_URI,
  token_uri: envVars.SECRET_FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: envVars.SECRET_FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: envVars.SECRET_FIREBASE_CLIENT_X509_CERT_URL,
};

const initApp = () => {
  if (envVars.PROD) {
    console.log("PROD env detected. Using default Service Account");
    return initializeApp();
  }

  return initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
  })
};

export const adminApp = activeApps.length === 0? initApp() : activeApps[0];
export const adminAuth = getAuth(adminApp);
