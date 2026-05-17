import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const progressVariants = tv({
  base: "progress",
  variants: {
    color: {
      neutral: "progress-neutral",
      primary: "progress-primary",
      secondary: "progress-secondary",
      accent: "progress-accent",
      info: "progress-info",
      success: "progress-success",
      warning: "progress-warning",
      error: "progress-error",
    },
  },
});

type ProgressVariants = VariantProps<typeof progressVariants>;

export type ProgressProps = Omit<React.ComponentProps<"progress">, "color"> &
  ProgressVariants;

const Progress = React.forwardRef<HTMLProgressElement, ProgressProps>(
  ({ color, className, ...props }, ref) => {
    return (
      <progress
        ref={ref}
        className={progressVariants({ color, className })}
        {...props}
      />
    );
  }
);

Progress.displayName = "Progress";

export default Progress;
