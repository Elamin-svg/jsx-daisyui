import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const dividerVariants = tv({
  base: "divider",
  variants: {
    color: {
      neutral: "divider-neutral",
      primary: "divider-primary",
      secondary: "divider-secondary",
      accent: "divider-accent",
      success: "divider-success",
      warning: "divider-warning",
      info: "divider-info",
      error: "divider-error",
    },
    direction: {
      vertical: "",
      horizontal: "divider-horizontal",
    },
    placement: {
      start: "divider-start",
      center: "",
      end: "divider-end",
    },
  },
  defaultVariants: {
    direction: "vertical",
    placement: "center",
  },
});

type DividerVariants = VariantProps<typeof dividerVariants>;

export type DividerProps = Omit<React.ComponentProps<"div">, "color"> &
  DividerVariants;

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      color,
      direction,
      placement,
      className,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={dividerVariants({ color, direction, placement, className })}
      {...props}
    />
  )
);

Divider.displayName = "Divider";

export default Divider;
