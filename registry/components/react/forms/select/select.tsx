"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const selectVariants = tv({
  base: "select",
  variants: {
    color: {
      neutral: "select-neutral",
      primary: "select-primary",
      secondary: "select-secondary",
      accent: "select-accent",
      info: "select-info",
      success: "select-success",
      warning: "select-warning",
      error: "select-error",
    },
    size: {
      xs: "select-xs",
      sm: "select-sm",
      md: "select-md",
      lg: "select-lg",
      xl: "select-xl",
    },
    ghost: {
      true: "select-ghost",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type SelectVariants = VariantProps<typeof selectVariants>;

export type SelectProps = Omit<
  React.ComponentProps<"select">,
  "size" | "color"
> &
  SelectVariants;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ color, size, ghost, className, ...props }, ref) => (
    <select
      ref={ref}
      className={selectVariants({ color, size, ghost, className })}
      {...props}
    />
  )
);

Select.displayName = "Select";

export default Select;
