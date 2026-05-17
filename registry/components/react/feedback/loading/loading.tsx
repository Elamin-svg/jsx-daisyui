import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const loadingVariants = tv({
  base: "loading",
  variants: {
    variant: {
      spinner: "loading-spinner",
      dots: "loading-dots",
      ring: "loading-ring",
      ball: "loading-ball",
      bars: "loading-bars",
      infinity: "loading-infinity",
    },
    size: {
      xs: "loading-xs",
      sm: "loading-sm",
      md: "loading-md",
      lg: "loading-lg",
      xl: "loading-xl",
    },
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      accent: "text-accent",
      neutral: "text-neutral",
      info: "text-info",
      success: "text-success",
      warning: "text-warning",
      error: "text-error",
    },
  },
  defaultVariants: {
    variant: "spinner",
    size: "md",
  },
});

type LoadingVariants = VariantProps<typeof loadingVariants>;

export type LoadingProps = Omit<React.ComponentProps<"span">, "size" | "color"> &
  LoadingVariants;

const Loading = React.forwardRef<HTMLSpanElement, LoadingProps>(
  ({ variant, size, color, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={loadingVariants({ variant, size, color, className })}
        {...props}
      />
    );
  }
);

Loading.displayName = "Loading";

export default Loading;
