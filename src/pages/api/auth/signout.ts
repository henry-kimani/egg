import type { APIRoute } from "astro";

export const GET: APIRoute = ({ redirect, cookies}) => {
  if (cookies.has("__session")) {
    cookies.delete("__session", { path: "/" });
  }

  return redirect("/dashboard/profile");
};
