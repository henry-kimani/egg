import { cn } from "@lib/utils";

interface Props {
  children: string;
  class?: string;
};

export default function SimpleButton({ children, class: styles }: Props) {
  return (
    <button 
      class={cn(`cursor-pointer px-3 !border-none py-1 focus:ring focus:outline-none focus:ring-[var(--sl-color-accent)] focus:ring-offset-2 dark:focus:ring-offset-[var(--sl-color-gray-5)]
      flex gap-2 items-center rounded-md bg-[var(--sl-color-accent)] text-[var(--sl-color-black)] dark:bg-[var(--sl-color-accent-high)]
    `, styles)}>
      {children}
    </button>
  );
}
