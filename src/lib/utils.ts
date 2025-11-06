import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { CollectionEntry } from "astro:content"
import type { SidebarGroup, SidebarEntry } from "@lib/types";
import { matchFirstChar } from "@lib/regex";

/*
 * The first result of an array */
export const FIRST_RESULT = 0;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sortByDate(collection: CollectionEntry<"releaseNotes">[]) {
  return collection.sort((a, b) => +b.data.date - +a.data.date );
}

export function latestCollection(collection: CollectionEntry<"releaseNotes">[]) {
  return sortByDate(collection)[0];
}

export function stripSlashes(path: string) {
  return path.slice(1, path.length - 1);
}

/*
 * Make sure that all top level items in the side bar are groups not links 
 * */
export function assertGroups(sidebar: SidebarEntry[]): asserts sidebar is SidebarGroup[] {
  for (const entry of sidebar) {
    if (entry.type !== "group")
      throw new Error("Top-level links are not allowed in the docs");
  }
}

export function toSentenceCase(str: string) {
  return str.replace(matchFirstChar, str[0].toUpperCase());
}
