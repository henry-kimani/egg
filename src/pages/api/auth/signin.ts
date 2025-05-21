import type { APIRoute } from "astro";
import { adminAuth } from "@firebase/server";

export const GET:APIRoute = async({request, cookies, redirect}) => {

  // Get the authorization token 
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];

  if (!idToken) {
    return new Response(
      "No token Id",
      { status: 401}
    );
  }

  // Verify the Id
  try {
    await adminAuth.verifyIdToken(idToken);
  } catch (error) {
    console.log("Error While Verifying Token", error);
    return new Response(
      "Invalid Token",
      { status: 403 }
    );   
  }

  // Create the session cookie
  const tenMins = 60*10*1000; 
  const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn: tenMins });
  
  cookies.set("__session", sessionCookie, {
    path: "/"
  })

  return redirect("/dashboard/profile");
}
