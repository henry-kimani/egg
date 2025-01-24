import type { AstroIntegration } from "astro";
import glob from "fast-glob";

/**
 * An Astro intergration that restarts the dev server if the passed paths change
 * 
 * It Also supports glob patterns to watch a set of files matching a pattern.
 *
 * @param Array of file paths relative to the root project.
 *
 * @example 
 *```ts
 * // astro.config.mjs
 * export default {
 *  intergrations: [
 *    devServerFileWatcher(["./example.js", "./src/content/demo/*.yml]),
 *  ],
 * }
 * ```
 */

export const devServerFileWatcher = (paths: string[]) => 
  ({
    name: 'dev-file-server-watcher',
    hooks: {
      async 'astro:config:setup'({ addWatchFile, config }) {
        for (const path of paths) {
          const files = await glob(path);
          files.forEach(file => addWatchFile(new URL(file, config.root)));
        }
      }
    },
}) satisfies AstroIntegration;
