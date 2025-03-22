export type ThemeVariants = "simple" | "blue" | "green" | "orange";

export function buttonThemes(theme: ThemeVariants) {
  return {
    "": theme === "simple",
    "!m-0 !bg-[var(--sl-color-gray-7)] !text-blue-700 !border-none dark:!bg-[var(--sl-color-gray-6)] dark:!text-[var(--sl-color-gray-1)]": theme === "blue",
    "!m-0 !bg-[var(--sl-color-gray-7)] !text-green-600 !border-none dark:!bg-[var(--sl-color-gray-6)] dark:!text-[var(--sl-color-gray-1)]": theme === "green",
    "!m-0 !bg-[var(--sl-color-gray-7)] !text-[var(--sl-color-accent)] !border-none dark:!bg-[var(--sl-color-gray-6)] dark:!text-[var(--sl-color-accent-high)]": theme === "orange",
  }
}

