interface ImportMetaEnv {
  readonly PUBLIC_FIREBASE_CLIENT_APIKEY: string;
  readonly PUBLIC_FIREBASE_CLIENT_AUTHDOMAIN: string;
  readonly PUBLIC_FIREBASE_CLIENT_PROJECTID: string;
  readonly PUBLIC_FIREBASE_CLIENT_STORAGEBUCKET: string;
  readonly PUBLIC_FIREBASE_CLIENT_MESSAGEINGSENDERID: string;
  readonly PUBLIC_FIREBASE_CLIENT_APPID: string;
  readonly PUBLIC_FIREBASE_CLIENT_MEASUREMENTID: string;

  readonly SECRET_FIREBASE_PROJECT_ID: string;
  readonly SECRET_FIREBASE_PRIVATE_KEY_ID: string;
  readonly SECRET_FIREBASE_PRIVATE_KEY: string;
  readonly SECRET_FIREBASE_CLIENT_EMAIL: string;
  readonly SECRET_FIREBASE_CLIENT_ID: string;
  readonly SECRET_FIREBASE_AUTH_URI: string;
  readonly SECRET_FIREBASE_TOKEN_URI: string;
  readonly SECRET_FIREBASE_AUTH_PROVIDER_X509_CERT_URL: string;
  readonly SECRET_FIREBASE_CLIENT_X509_CERT_URL: string;
  readonly SECRET_FIREBASE_UNIVERSE_DOMAIN: string;
}

declare namespace App {
  interface Locals {
    uid: string;
    userName: string | "Guest";
    email?: string;
  }
}
