import { cva } from "class-variance-authority";

export const focusClasses = 'focus:ring-3 focus:outline-hidden focus:ring-(--sl-color-accent) focus:ring-offset-2 dark:focus:ring-offset-(--sl-color-gray-5)';

export const reactButtonVariants = cva(
  ["rounded-md inline-flex items-center justify-center gap-2", focusClasses], {
  variants: {
    variant: {
      primary: "bg-accent-light dark:bg-accent-dark text-white dark:text-gray-900 hover:bg-orange-600/85 dark:hover:bg-orange-200",
      secondary: "border border-accent-light dark:border-accent-light text-accent-light dark:text-accent-light bg-transparent hover:bg-(--sl-color-gray-6)",
      minimal: "bg-transparent hover:bg-(--sl-color-gray-5)"
    },
    size: {
      sm: "",
      md: "p-1",
      lg: "p-2",
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  }
});

export const astroButtonVariants = cva(
  ["rounded-md inline-flex items-center justify-center gap-2 ", focusClasses], {
    variants: {
      variant: {
        primary: "bg-accent-light dark:bg-accent-light !text-(--sl-color-gray-6) dark:!text-(--sl-color-gray-6) hover:bg-orange-600/90 dark:hover:bg-orange-light ",
        secondary: "!border border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark bg-transparent hover:bg-(--sl-color-gray-6)",
        minimal: "bg-transparent hover:bg-(--sl-color-gray-5)"
      },
      size: {
        sm: "",
        md: "p-1",
        lg: "p-2",
        icon: "h-9 w-9"
      }
    }
  });

