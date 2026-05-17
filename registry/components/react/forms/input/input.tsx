import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const inputVariants = tv({
  slots: {
    root: "input",
  },
  variants: {
    color: {
      neutral: { root: "input-neutral" },
      primary: { root: "input-primary" },
      secondary: { root: "input-secondary" },
      accent: { root: "input-accent" },
      info: { root: "input-info" },
      success: { root: "input-success" },
      warning: { root: "input-warning" },
      error: { root: "input-error" },
    },
    size: {
      xs: { root: "input-xs" },
      sm: { root: "input-sm" },
      md: { root: "input-md" },
      lg: { root: "input-lg" },
      xl: { root: "input-xl" },
    },
    ghost: {
      true: { root: "input-ghost" },
    },
    validator: {
      true: { root: "validator" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type InputVariants = VariantProps<typeof inputVariants>;

export type InputProps = Omit<
  React.ComponentProps<"input">,
  "size"
> &
  InputVariants & {
    validatorHint?: string;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      color,
      size,
      ghost,
      validator,
      validatorHint,
      className,
      ...props
    },
    ref
  ) => {
    const { root } = inputVariants({ color, size, ghost, validator });
    return (
      <>
        <input ref={ref} className={root({ className })} {...props} />
        {validatorHint && <p className="validator-hint">{validatorHint}</p>}
      </>
    );
  }
);

Input.displayName = "Input";

export { Input };
