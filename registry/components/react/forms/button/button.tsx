import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "btn",
  variants: {
    color: {
      default: "",
      neutral: "btn-neutral",
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      error: "btn-error",
      info: "btn-info",
      success: "btn-success",
      warning: "btn-warning",
    },
    variant: {
      default: "",
      ghost: "btn-ghost",
      link: "btn-link",
      outline: "btn-outline",
      dash: "btn-dash",
      soft: "btn-soft",
    },
    shape: {
      default: "",
      square: "btn-square",
      circle: "btn-circle",
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      xl: "btn-xl",
    },
    wide: {
      true: " btn-wide",
    },
    block: {
      true: "btn-block",
    },
    loading: {
      true: "",
    },
    active: {
      true: "btn-active",
    },
    disabled: {
      true: "btn-disabled",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
    color: "default",
    shape: "default",
  },
});

type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = Omit<
  React.ComponentProps<"button">,
  "color" | "size" | "disabled"
> &
  ButtonVariants;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      loading,
      wide,
      block,
      color,
      shape,
      active,
      disabled,
      children,
      className,
      ...props
    },
    ref,
  ) => (
    <button
      ref={ref}
      className={buttonVariants({
        variant,
        size,
        wide,
        block,
        color,
        shape,
        active,
        disabled,
        loading,
        className,
      })}
      disabled={disabled}
      {...props}
    >
      {children}
      {loading && (
        <span className={"loading loading-spinner loading-xs  ml-0.5"} />
      )}
    </button>
  ),
);

Button.displayName = "Button";

export default Button;
