import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const statusVariants = tv({
  base: "status",
  variants: {
    color: {
      neutral: "status-neutral",
      primary: "status-primary",
      secondary: "status-secondary",
      accent: "status-accent",
      info: "status-info",
      success: "status-success",
      warning: "status-warning",
      error: "status-error",
    },
    size: {
      xs: "status-xs",
      sm: "status-sm",
      md: "status-md",
      lg: "status-lg",
      xl: "status-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type StatusVariants = VariantProps<typeof statusVariants>;

export type StatusProps = Omit<React.ComponentProps<"div">, "size" | "color"> &
  StatusVariants;

const Status = React.forwardRef<HTMLDivElement, StatusProps>(
  ({ color, size, className, ...props }, ref) => {
    return (
      <div ref={ref} className={statusVariants({ color, size, className })} {...props} />
    );
  }
);

Status.displayName = "Status";

export default Status;
