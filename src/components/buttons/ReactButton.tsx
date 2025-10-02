import { cn } from "@lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import { reactButtonVariants } from "@components/buttons/buttonVariants";

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
} : 
  React.ComponentProps<"button"> & 
  VariantProps<typeof reactButtonVariants> &
  { asChild?: boolean }
) {
  const Comp = asChild ? Slot : "button";

  return <Comp
    className={cn(reactButtonVariants({ variant, size, className }), "px-3")}
    {...props}
  />
}

export default Button;
