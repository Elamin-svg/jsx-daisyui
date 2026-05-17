import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const kbdVariants = tv({
  base: "kbd",
  variants: {
    size: {
      xs: "kbd-xs",
      sm: "kbd-sm",
      md: "kbd-md",
      lg: "kbd-lg",
      xl: "kbd-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type KbdVariants = VariantProps<typeof kbdVariants>;

export type KbdProps = Omit<React.ComponentProps<"kbd">, "color"> & KbdVariants;

const Kbd = React.forwardRef<HTMLElement, KbdProps>(
  ({ size, className, ...props }, ref) => (
    <kbd ref={ref} className={kbdVariants({ size, className })} {...props} />
  )
);

Kbd.displayName = "Kbd";

export default Kbd;
