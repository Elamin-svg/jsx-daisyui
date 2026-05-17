import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const radioVariants = tv({
  base: "radio",
  variants: {
    color: {
      neutral: "radio-neutral",
      primary: "radio-primary",
      secondary: "radio-secondary",
      accent: "radio-accent",
      success: "radio-success",
      warning: "radio-warning",
      info: "radio-info",
      error: "radio-error",
    },
    size: {
      xs: "radio-xs",
      sm: "radio-sm",
      md: "radio-md",
      lg: "radio-lg",
      xl: "radio-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type RadioVariants = VariantProps<typeof radioVariants>;

export type RadioProps = Omit<React.ComponentProps<"input">, "color" | "type" | "size"> &
  RadioVariants;

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ color, size, className, ...props }, ref) => (
    <input
      ref={ref}
      type="radio"
      className={radioVariants({ color, size, className })}
      {...props}
    />
  ),
);
Radio.displayName = "Radio";

export { Radio };
