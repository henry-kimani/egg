import type { SidebarEntry } from "node_modules/@astrojs/starlight/utils/routing/types";
import { getCollection } from "astro:content";
import { FIRST_RESULT, stripSlashes } from "@lib/utils";

type YearNames = "Year One" | "Year Two" | "Year Three";

/**
 * Get the sidebar data of the specified year
 *
 * @param sidebar - the sidebar data to filter
 * @param yearName - the year to query*/
export function getYearSidebarData(sidebar: SidebarEntry[], yearName: YearNames) {
  return sidebar.filter((year) => year.label === yearName)[0];
}

const docsCollections = await getCollection("docs");

/**
 *
 * Get the title and description of the specified path
 * 
 * @param pathname - the pathname to search for
 */
export function getTitleAndDescription(pathname: string) {
  return docsCollections
    .map(docColl => {
    if (stripSlashes(pathname) === docColl.id) {
      return {
        title: docColl.data.title, 
        description: docColl.data.description
      };
    }
  })
    .filter(entry => entry !== undefined)[FIRST_RESULT];
}
