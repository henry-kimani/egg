interface ImportMetaEnv {
  readonly FIREBASE_CLIENT_APIKEY: string;
  readonly FIREBASE_CLIENT_AUTHDOMAIN: string;
  readonly FIREBASE_CLIENT_PROJECTID: string;
  readonly FIREBASE_CLIENT_STORAGEBUCKET: string;
  readonly FIREBASE_CLIENT_MESSAGEINGSENDERID: string;
  readonly FIREBASE_CLIENT_APPID: string;
  readonly FIREBASE_CLIENT_MEASUREMENTID: string;
};

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
