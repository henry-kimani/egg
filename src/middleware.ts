import { defineMiddleware } from "astro:middleware";
import { adminAuth } from "@firebase/server";

export const onRequest = defineMiddleware(async(context, next) => {

  const unAllowedRoutes = [
    'year1',
    'year2',
  ];

  const sessionCookie = context.cookies.get("__session")?.value;
  const currentPath = context.url.pathname;

  if (sessionCookie) {
    try {
      // Verify the cookies and check if its revoked
      await adminAuth.verifySessionCookie(sessionCookie, true);
      console.log("Good, Cookie found!");
    } catch(err) {
      if(err.code === 'auth/session-cookie-expired') {
        context.cookies.delete("__session", { path: "/" });
        return Response.redirect(new URL("/dashboard/profile", context.url.href));
      }
      if (err.code === 'auth/argument-error') {
        return Response.redirect(new URL("/error", context.url.href));
      }
      return Response.redirect(new URL("/error", context.url.href));
    }
  } 

  // Protect content routes for unAuthorized requests
  /*
  if (!sessionCookie && 
    (currentPath.startsWith("/year1") || currentPath.startsWith("/year2"))
  ) {
    return Response.redirect(new URL("/dashboard/profile", context.url.href));
  }*/


  return next();
  //    - Make sure the user is logged in otherwise show a accept cookies modal
});
