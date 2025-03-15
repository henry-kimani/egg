interface ImportMetaEnv {
  readonly PUBLIC_FIREBASE_CLIENT_APIKEY: string;
  readonly PUBLIC_FIREBASE_CLIENT_AUTHDOMAIN: string;
  readonly PUBLIC_FIREBASE_CLIENT_PROJECTID: string;
  readonly PUBLIC_FIREBASE_CLIENT_STORAGEBUCKET: string;
  readonly PUBLIC_FIREBASE_CLIENT_MESSAGEINGSENDERID: string;
  readonly PUBLIC_FIREBASE_CLIENT_APPID: string;
  readonly PUBLIC_FIREBASE_CLIENT_MEASUREMENTID: string;
};

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
