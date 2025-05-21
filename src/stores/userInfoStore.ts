import { map } from "nanostores";

// Initializing default state
export const $userInfo = map<User>(
  { 
    isLoggedIn: false,
    uid: "",
    displayName: "Anonymous",
    email: "",
    photoURL: "" 
  }
);

export function setUserInfo(user: User) {
  // If the user information is available and they are logged in
  if (user) {
    // Write to the nanostore the user information from the server
    $userInfo.set({
      isLoggedIn: user.isLoggedIn,
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    });
  } 
};
