import ReactButton from "@components/buttons/ReactButton";

import { setPersistence, browserSessionPersistence, browserLocalPersistence, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@firebase/client";
import { useEffect, useState } from "preact/hooks";

export default function SignIn() {

  const [ isPersist, setIsPersist ] = useState(false);

  /* Determine session persistence */
  useEffect(() => {
    async function setAuthPersistance() {

      if (isPersist) {
        await setPersistence(auth, browserLocalPersistence);
      } else {
        await setPersistence(auth, browserSessionPersistence);
      }
    };

    setAuthPersistance();

  }, [isPersist]);

  async function handleSignInButtonClick() {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);

      window.location.assign("/dashboard/profile");
    } catch(error) {
      window.location.assign("/error");
    }
  }

  return(
    <>
      <div class="grid text-md md:w-96">
        <ReactButton
          variant="primary"
          size="md"
          onClick={handleSignInButtonClick}
        >
          Continue With Google
        </ReactButton>
      </div>

      <div>
        <input 
          type="checkbox" 
          name="remember-me" 
          id="remember-me" 
          onChange={(e) => setIsPersist(e.currentTarget.checked)}
        />
        <label
          htmlFor="remember-me"
          title="Remember you even after you have closed this session"
        >&nbsp;Remember me </label>
      </div>
    </>
  );
}
