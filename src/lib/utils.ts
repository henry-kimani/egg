import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { CollectionEntry } from "astro:content"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sortByDate(collection: CollectionEntry<"releaseNotes">[]) {
  return collection.sort((a, b) => +b.data.date - +a.data.date );
}

export function latestCollection(collection: CollectionEntry<"releaseNotes">[]) {
  return sortByDate(collection)[0];
}
