import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const alertVariants = tv({
  base: "alert",
  variants: {
    variant: {
      default: "",
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
      error: "alert-error",
    },
    style: {
      solid: "alert-solid",
      soft: "alert-soft",
      outline: "alert-outline",
      dash: "alert-dash",
    },
    orientation: {
      vertical: "alert-vertical",
      horizontal: "sm:alert-horizontal",
    },
  },
  defaultVariants: {
    style: "solid",
  },
});

type AlertVariants = VariantProps<typeof alertVariants>;

export type AlertProps = Omit<React.ComponentProps<"div">, "style"> &
  AlertVariants;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, style, orientation, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={alertVariants({ variant, style, orientation, className })}
        {...props}
      />
    );
  },
);

Alert.displayName = "Alert";

export default Alert;
