import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const textareaVariants = tv({
  base: "textarea",
  variants: {
    color: {
      neutral: "textarea-neutral",
      primary: "textarea-primary",
      secondary: "textarea-secondary",
      accent: "textarea-accent",
      info: "textarea-info",
      success: "textarea-success",
      warning: "textarea-warning",
      error: "textarea-error",
    },
    size: {
      xs: "textarea-xs",
      sm: "textarea-sm",
      md: "textarea-md",
      lg: "textarea-lg",
      xl: "textarea-xl",
    },
    variant: {
      filled: "",
      ghost: "textarea-ghost",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
});

type TextareaVariants = VariantProps<typeof textareaVariants>;

export type TextareaProps = Omit<
  React.ComponentProps<"textarea">,
  "size"
> &
  TextareaVariants;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ color, size, variant, className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={textareaVariants({ color, size, variant, className })}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";

export default Textarea;
