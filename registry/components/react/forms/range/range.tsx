import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const rangeVariants = tv({
  base: "range",
  variants: {
    color: {
      neutral: "range-neutral",
      primary: "range-primary",
      secondary: "range-secondary",
      accent: "range-accent",
      info: "range-info",
      success: "range-success",
      warning: "range-warning",
      error: "range-error",
    },
    size: {
      xs: "range-xs",
      sm: "range-sm",
      md: "range-md",
      lg: "range-lg",
      xl: "range-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type RangeVariants = VariantProps<typeof rangeVariants>;
type RangeProps = Omit<React.ComponentProps<"input">, "size" | "color"> & RangeVariants;

const Range = React.forwardRef<HTMLInputElement, RangeProps>(
  ({ className, color, size, ...props }, ref) => (
    <input
      ref={ref}
      type="range"
      className={rangeVariants({ color, size, className })}
      {...props}
    />
  ),
);

Range.displayName = "Range";
export default Range;
