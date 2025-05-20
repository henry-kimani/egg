import { map } from "nanostores";

export const $userInfo = map<User>(
  { displayName: "Anonymous", email: "", photoURL: "" }
);

export function setUserInfo(user: User) {
  $userInfo.set({
    displayName: user.displayName,
    email: user.displayName,
    photoURL: user.displayName,
  });
};
