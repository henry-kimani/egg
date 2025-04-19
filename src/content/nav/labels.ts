import type { SidebarLink } from "node_modules/@astrojs/starlight/utils/routing/types";

export default {
  start: "Dashboard",
  "docs": "Documentation",
  // values used in the sidebar
  year1: "Year One",
  "one.ccs100": "CCS 100: Introduction to Criminology",
  "one.ccs102": "CCS 102: Criminal Justice Systems",
  "one.ccs103": "CCS 103: Introduction to Sociology",
  "one.ccs104": "CCS 104: Language of Crime and Deviance",
  "one.ccs105": "CCS 105: Introduction to Crimial Law",
  "one.ccs106": "CCS 106: Introduction to Criminal Investigation",
  "one.ccs108": "CCS 108: Introduction to Security Studies",

  year2: "Year Two",
  "two.ccs200": "CCS 200: Criminal Law",
  "two.ccs201": "CCS 201: Juvenile Delinquency",
  "two.ccs202": "CCS 202: Crime Prevention and Management",
  "two.ccs203": "CCS 203: Introduction to Rehabilitation of Offenders",
  "two.ccs204": "CCS 204: Human Rights and Criminal Justice",
  "two.ccs205": "CCS 205: Criminal Procedure",
  "two.ccs206": "CCS 206: National Security",
  "two.ccs207": "CCS 207: Penology",
  "two.ccs208": "CCS 208: Criminal Psychology",
  "two.ams209": "AMS 209: Social Statistics"
}

export function userProfileEntry(pathname: string): SidebarLink {
  return {
  type: "link",
  label: "Profile 🤩",
  href: "/dashboard/profile",
  badge: undefined,
  isCurrent: pathname === "/dashboard/profile",
  attrs: {}
  };
};

