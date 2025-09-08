import { defineMiddleware } from "astro:middleware";
import { adminAuth } from "@firebase/server";

export const onRequest = defineMiddleware(async(context, next) => {

  const sessionCookie = context.cookies.get("__session")?.value;

  const currentPath = context.url.pathname;

  /* Check if the current request is allowed by verifying its session cookie */
  if (sessionCookie) {
    try {
      const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie);
      const userInfo = await adminAuth.getUser(decodedClaims.uid);

      if (userInfo) {
        context.locals.user = {
          isLoggedIn: true,
          uid: userInfo.uid,
          displayName: userInfo.displayName || "Guest",
          email: userInfo.email || "",
          photoURL: userInfo.photoURL,
        };
      } else {
        context.locals.user = {
          isLoggedIn: false,
          uid: "",
          displayName: "Anonymous",
          email: "",
          photoURL: "",
        };
      }

    } catch(err: any) {
      // Deleting the invalid cookie
      if(err.code === 'auth/session-cookie-expired') {
        context.cookies.delete("__session", { path: "/" });
        return Response.redirect(new URL("/signin", context.url.href));
      }
      if (err.code === 'auth/argument-error') {
        console.log(err);
        return Response.redirect(new URL("/error", context.url.href));
      }

      context.cookies.delete("__session", { path: "/" });
      return Response.redirect(new URL("/error", context.url.href));
    }
  } else {
  }

  // Protect content routes from unAuthorized requests
  if (!sessionCookie && 
    (currentPath.startsWith("/year1") || currentPath.startsWith("/year2"))
  ) {
    return Response.redirect(new URL("/signin", context.url.href));
  } 

  return next();
});
