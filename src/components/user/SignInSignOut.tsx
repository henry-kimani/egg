import { useStore } from "@nanostores/preact";
import { $userInfo } from "@stores/userInfoStore";
import SignOut from "@components/user/SignOut";
import SimpleButton from "@components/buttons/SimpleButton";

export default function SignInSignOut(){

  const user = useStore($userInfo);

  return user.isLoggedIn ? 
    <SignOut>Sign out</SignOut> 
    : <a class={"no-underline"} href={"/signin"}>
      <SimpleButton>Sign in</SimpleButton>
    </a>
}
