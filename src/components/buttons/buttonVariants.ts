import { cva } from "class-variance-authority";

export const focusClasses = 'focus:ring focus:outline-none focus:ring-[var(--sl-color-accent)] focus:ring-offset-2 dark:focus:ring-offset-[var(--sl-color-gray-5)]';

export const reactButtonVariants = cva(
  ["rounded-md inline-flex items-center justify-center gap-2", focusClasses], {
  variants: {
    variant: {
      primary: "bg-[--sl-color-accent] dark:bg-[--sl-color-accent-high] !text-[--sl-color-black] dark:!text-[--sl-color-black] hover:bg-orange-600/90 dark:hover:bg-orange-200",
      secondary: "!border !border-[--sl-color-accent] dark:!border-[--sl-color-accent-high] text-[--sl-color-accent] dark:text-[--sl-color-accent-high] bg-transparent hover:bg-[--sl-color-gray-6]",
      minimal: "bg-transparent hover:bg-[--sl-color-gray-5]"
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
        primary: "bg-[--sl-color-accent] dark:bg-[--sl-color-accent-high] !text-[--sl-color-gray-6] dark:!text-[--sl-color-gray-6] hover:bg-orange-600/90 dark:hover:bg-orange-200",
        secondary: "!border !border-[--sl-color-accent] dark:!border-[--sl-color-accent-high] text-[--sl-color-accent] dark:text-[--sl-color-accent-high] bg-transparent hover:bg-[--sl-color-gray-6]",
        minimal: "bg-transparent hover:bg-[--sl-color-gray-5]"
      },
      size: {
        sm: "",
        md: "p-1",
        lg: "p-2",
        icon: "h-9 w-9"
      }
    }
  });

