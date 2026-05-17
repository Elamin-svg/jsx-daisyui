import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const badgeVariants = tv({
  base: "badge",
  variants: {
    color: {
      neutral: "badge-neutral",
      primary: "badge-primary",
      secondary: "badge-secondary",
      accent: "badge-accent",
      info: "badge-info",
      success: "badge-success",
      warning: "badge-warning",
      error: "badge-error",
      ghost: "badge-ghost",
    },
    size: {
      xs: "badge-xs",
      sm: "badge-sm",
      md: "badge-md",
      lg: "badge-lg",
      xl: "badge-xl",
    },
    variant: {
      outline: "badge-outline",
      dash: "badge-dash",
      soft: "badge-soft",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type BadgeVariants = VariantProps<typeof badgeVariants>;

export type BadgeProps = Omit<React.ComponentProps<"span">, "color"> & BadgeVariants;

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ color, size, variant, className, ...props }, ref) => (
    <span ref={ref} className={badgeVariants({ color, size, variant, className })} {...props} />
  )
);

Badge.displayName = "Badge";

export default Badge;
