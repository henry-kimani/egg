import { setUserInfo, $userInfo } from "@stores/userInfoStore";
import { useEffect } from "preact/hooks";

interface Props {
  user: User;
}

export default function HydrateUserInfo({ user }: Props) {

  // Runs once when mounted on the client
  useEffect(() => {

    // The current information from the user store
    const currentUserInfo = $userInfo.get();

    if (user && user.isLoggedIn && user.uid) {
      /* Only update if the client nanostore info is out of sync with the server
       * or the store isn't set with this user */
      if (currentUserInfo.uid !== user.uid || !currentUserInfo.isLoggedIn) {
        setUserInfo({
          isLoggedIn: user.isLoggedIn,
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        });
      }
    }

  }, [ user ]);
  return null
}
