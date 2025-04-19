import { defineRouteMiddleware } from "@astrojs/starlight/route-data";
import { userProfileEntry } from "./content/nav/labels";

export const onRequest = defineRouteMiddleware((context) => {
  const dashboardEntries = context.locals.starlightRoute.sidebar[0];

  // Adding user profile entries since its SSR not SSG
  if (dashboardEntries.type === "group") {
    dashboardEntries.entries.unshift(userProfileEntry(context.url.pathname));
  }
});
