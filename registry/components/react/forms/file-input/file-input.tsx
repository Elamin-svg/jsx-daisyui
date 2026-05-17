import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const fileInputVariants = tv({
  base: "file-input",
  variants: {
    color: {
      neutral: "file-input-neutral",
      primary: "file-input-primary",
      secondary: "file-input-secondary",
      accent: "file-input-accent",
      info: "file-input-info",
      success: "file-input-success",
      warning: "file-input-warning",
      error: "file-input-error",
    },
    variant: {
      ghost: "file-input-ghost",
    },
    size: {
      xs: "file-input-xs",
      sm: "file-input-sm",
      md: "file-input-md",
      lg: "file-input-lg",
      xl: "file-input-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type FileInputVariants = VariantProps<typeof fileInputVariants>;

export type FileInputProps = Omit<
  React.ComponentProps<"input">,
  "size" | "color" | "type"
> &
  FileInputVariants;

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  ({ className, color, variant, size, ...props }, ref) => (
    <input
      ref={ref}
      type="file"
      className={fileInputVariants({ color, variant, size, className })}
      {...props}
    />
  )
);

FileInput.displayName = "FileInput";

export default FileInput;
