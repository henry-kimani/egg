import { defineRouteMiddleware } from "@astrojs/starlight/route-data";
import { releaseNotesEntry } from "./content/nav/labels";

export const onRequest = defineRouteMiddleware((context) => {
  const routeData = context.locals.starlightRoute;

  /* Add label (unit's name) in then entry */
  const currentRouteData = routeData.entry.data;

  const sidebarItems = routeData.sidebar;

  /* Explicit code for me is better. Since it makes sense. I know I could just use
   * recursion. Additionally, here performance is not crucial since the site will 
   * be SSG-ed 
   *
   * I did all of this just to extract the a unit's label from the sidebar data
   * and add it to the entry(current route) */

  // Go through all the years
  sidebarItems.map(year => {

    // Get the units of each year
    if (year.type === "group") {
      const units = year.entries;

      units.map((topic, i) => {
        // Check all the topics in a unit
        if (topic.type === "group") {
          const unitLabel = units[i].label;
          const topics = topic.entries;

          topics.map(t => {
            /* Add the unitLabel to the current route */
            if (t.type === "link" && t.isCurrent ) {
              context.locals.starlightRoute.entry.data = { ...currentRouteData, unitLabel }
            }
          });
        }
      })
    }
  })

  // Add release notes path to the sidebar
  const dashboardSidebarEntries = routeData.sidebar[0];

  if (dashboardSidebarEntries.type === "group") {
    dashboardSidebarEntries.entries.push(releaseNotesEntry());
  }
});
