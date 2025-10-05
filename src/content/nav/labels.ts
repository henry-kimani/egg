import type { SidebarLink } from "node_modules/@astrojs/starlight/utils/routing/types";

export default {
  start: "Dashboard",
  "docs": "Documentation",
  // values used in the sidebar
  year1: "Year One",
  "one.ccs100": "Introduction to Criminology",
  "one.ccs102": "Criminal Justice Systems",
  "one.ccs103": "Introduction to Sociology",
  "one.ccs104": "Language of Crime and Deviance",
  "one.ccs105": "Introduction to Crimial Law",
  "one.ccs106": "Introduction to Criminal Investigation",
  "one.ccs108": "Introduction to Security Studies",

  year2: "Year Two",
  "two.ccs200": "Law of Evidence",
  "two.ccs201": "Juvenile Delinquency",
  "two.ccs202": "Crime Prevention and Management",
  "two.ccs203": "Introduction to Rehabilitation of Offenders",
  "two.ccs204": "Human Rights and Criminal Justice",
  "two.ccs205": "Criminal Procedure",
  "two.ccs206": "National Security",
  "two.ccs207": "Penology",
  "two.ccs208": "Criminal Psychology",
  "two.ams209": "Social Statistics",

  year3: "Year Three",
  "three.ccs300": "Physical and Technical Security",
  "three.ccs301": "Research Methods",
  "three.ccs302": "Emergency Management",
  "three.ccs314": "Victimology",
  "three.sit312": "Electronic Access"
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

