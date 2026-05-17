"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const checkboxVariants = tv({
  base: "checkbox",
  variants: {
    color: {
      primary: "checkbox-primary",
      secondary: "checkbox-secondary",
      accent: "checkbox-accent",
      neutral: "checkbox-neutral",
      info: "checkbox-info",
      success: "checkbox-success",
      warning: "checkbox-warning",
      error: "checkbox-error",
    },
    size: {
      xs: "checkbox-xs",
      sm: "checkbox-sm",
      md: "checkbox-md",
      lg: "checkbox-lg",
      xl: "checkbox-xl",
    },
    indeterminate: {
      true: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type CheckboxVariants = VariantProps<typeof checkboxVariants>;

export type CheckboxProps = Omit<
  React.ComponentProps<"input">,
  "size" | "color" | "type"
> &
  CheckboxVariants;

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, color, size, indeterminate, ...props }, ref) => {
    const innerRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    React.useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = indeterminate ?? false;
      }
    }, [indeterminate]);

    return (
      <input
        ref={innerRef}
        type="checkbox"
        className={checkboxVariants({ color, size, className })}
        {...props}
      />
    );
  },
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
