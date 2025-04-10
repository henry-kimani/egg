import { defineMiddleware } from "astro:middleware";
import { adminAuth } from "@firebase/server";

export const onRequest = defineMiddleware(async(context, next) => {


  // Check if the current request is allowed to access the resource
  /*const idToken = context.cookies.get("__session")?.value;

  if(idToken) {
    try {
      await adminAuth.verifyIdToken(idToken);
    } catch(err) {
      context.cookies.delete("__session");
    }
  } else {
    context.redirect("/");
  } */

  return next();

  // 1. Make the username available in the locals
  // 2. On every request:
  //    - Make sure the user is logged in otherwise show a accept cookies modal
  //    - Log in the user anonymously
  //    - Confirm its not an
  /* When an account is upgraged to a permanent one, prevent the user from getting
   * signed in again to anonymous account. */
});
