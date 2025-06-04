import { useStore } from "@nanostores/preact";
import { $userInfo } from "@stores/userInfoStore";
import { ReactLink } from "@components/buttons/ReactLink";

export default function SignInSignOut(){

  const user = useStore($userInfo);

  return user.isLoggedIn ? 
    <ReactLink
      className="text-red-400"
      href="/api/auth/signout"
    >Sign Out</ReactLink>
    :
    <ReactLink
      href="/signin"
    >Sign In</ReactLink>
}
