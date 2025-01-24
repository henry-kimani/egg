import type starlight from "@astrojs/starlight";
import labels from "../src/content/nav/labels";

// create a type of the keys of 'labels`
type NavKey = keyof typeof labels;
// type NavDict = Record<NavKey, string>

/* extract the type of params of starlight function, specifically the sidebar
 * removing nulls and undefined's.
 * Essentially, the type of sidebar from starlight */
type StarlightSidebarConfig = NonNullable<Parameters<typeof starlight>[0]['sidebar']>

type StarlightSidebarEntry = StarlightSidebarConfig[number];
type StarlightManualSidebarGroup = Extract<StarlightSidebarEntry, { items: any[] }>;
type StarlightAutoSidebarGroup = Extract<StarlightSidebarEntry, { autogenerate: any }>;


export function group(
  key: NavKey,
  group: Omit<StarlightAutoSidebarGroup,'label'> | Omit<StarlightManualSidebarGroup, 'label'>
): StarlightAutoSidebarGroup | StarlightManualSidebarGroup {
  return {
    label: labels[key],
    ...group,
  };
}
