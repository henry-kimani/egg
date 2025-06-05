import { useStore } from "@nanostores/preact";
import { $userInfo } from "@stores/userInfoStore";
import { ReactLink } from "@components/buttons/ReactLink";
import ReactButton from "@components/buttons/ReactButton";
import type { ComponentProps } from "preact";

export default function SignInSignOut({ variant }: ComponentProps<typeof ReactButton>){

  const user = useStore($userInfo);

  return user.isLoggedIn ? 
    <form class="grid" action="/api/auth/signout">
      <ReactButton variant={variant}>Sign Out</ReactButton>
    </form>
    :
    <ReactLink
      href="/signin"
      variant={variant}
    >Sign In</ReactLink>
}
