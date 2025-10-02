import { ReactLink } from "@components/buttons/ReactLink";
import ReactButton from "@components/buttons/ReactButton";
import type { ComponentProps } from "preact";
import { auth } from "@firebase/client";
import { useEffect, useState } from "preact/hooks";
import { onAuthStateChanged } from "firebase/auth";

export default function SignInSignOut(
  { variant, className, icon }:
  ComponentProps<typeof ReactButton> & { icon?: boolean }
) {
  const [ isSignedIn, setIsSignedIn ] = useState(false);

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });

    return subscriber;
  }, []);

  return isSignedIn ? 
    <ReactButton 
      className={className}
      variant={variant}
      onClick={ () => auth.signOut() }
    >{icon && <span>&nbsp;🚪&nbsp;&nbsp;</span> }Sign Out</ReactButton>
    :
    <ReactLink
      href="/signin"
      variant={variant}
      className={className}
    >{icon && <span>&nbsp;🔓&nbsp;&nbsp;</span> }Sign In</ReactLink>
}
