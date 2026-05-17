"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const toggleVariants = tv({
  base: "toggle",
  variants: {
    color: {
      neutral: "toggle-neutral",
      primary: "toggle-primary",
      secondary: "toggle-secondary",
      accent: "toggle-accent",
      info: "toggle-info",
      success: "toggle-success",
      warning: "toggle-warning",
      error: "toggle-error",
    },
    size: {
      xs: "toggle-xs",
      sm: "toggle-sm",
      md: "toggle-md",
      lg: "toggle-lg",
      xl: "toggle-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type ToggleVariants = VariantProps<typeof toggleVariants>;

export type ToggleProps = Omit<
  React.ComponentProps<"input">,
  "type" | "size"
> &
  ToggleVariants;

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ color, size, className, ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      className={toggleVariants({ color, size, className })}
      {...props}
    />
  )
);

Toggle.displayName = "Toggle";

export default Toggle;
