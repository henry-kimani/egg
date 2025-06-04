import type { VariantProps } from "class-variance-authority";
import { reactButtonVariants } from "./buttonVariants";
import { cn } from "@lib/utils";

export function ReactLink({
  className,
  variant,
  size,
  children,
  ...props
}:
  React.ComponentProps<"a"> &
  VariantProps<typeof reactButtonVariants>
) {
  return (
    <a 
      {...props}
      className={cn("no-underline", reactButtonVariants({ variant, size, className}))}
    >{children}</a>
  );
}
