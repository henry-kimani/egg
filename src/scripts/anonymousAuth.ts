import { auth } from "@firebase/client";
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";

export async function anonymousAuth() {
  try {
    await signInAnonymously(auth);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
      } else {
        console.log("user is signed out");
      }
    });
  } catch(error) {
    console.error(error);
  }
}
