import { type Badge } from "@astrojs/starlight/components";
import { type LinkHTMLAttributes } from "@astrojs/starlight/schema/sidebar";

export type SidebarLink = {
  type: 'link';
  label: string;
  href: string;
  isCurrent: boolean;
  badge: Badge | undefined;
  attrs: LinkHTMLAttributes;
}

export type SidebarGroup = {
  type: 'group';
  label: string;
  entries: (SidebarLink | SidebarGroup )[];
  collapsed: boolean;
  badge: Badge | undefined;
}

export type SidebarEntry = SidebarLink | SidebarGroup;
