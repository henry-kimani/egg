import { defineMiddleware } from "astro:middleware";
import { adminAuth } from "@firebase/server";

export const onRequest = defineMiddleware(async(context, next) => {

  const sessionCookie = context.cookies.get("__session")?.value;

  const currentPath = context.url.pathname;

  /* Check if the current request is allowed by verifying its session cookie */
  if (sessionCookie) {
    try {
      const decodedTokenId = await adminAuth.verifySessionCookie(sessionCookie);
      const userInfo = await adminAuth.getUser(decodedTokenId.uid);

      if (userInfo) {
        context.locals.user = {
          displayName: userInfo.displayName || "Guest",
          email: userInfo.email || "",
          photoURL: userInfo.photoURL,
        };
      }

    } catch(err: any) {
      // Deleting the invalid cookie
      if(err.code === 'auth/session-cookie-expired') {
        console.log("expired cookie");
        context.cookies.delete("__session", { path: "/" });
        return Response.redirect(new URL("/signin", context.url.href));
      }
      if (err.code === 'auth/argument-error') {
        return Response.redirect(new URL("/error", context.url.href));
      }
      return Response.redirect(new URL("/error", context.url.href));
    }
  } 

  // Protect content routes from unAuthorized requests
  if (!sessionCookie && 
    (currentPath.startsWith("/year1") || currentPath.startsWith("/year2"))
  ) {
    return Response.redirect(new URL("/signin", context.url.href));
  }

  return next();
  //    - Make sure the user is logged in otherwise show a accept cookies modal
});
