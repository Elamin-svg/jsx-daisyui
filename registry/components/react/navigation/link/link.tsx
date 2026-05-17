import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const linkVariants = tv({
  base: "link",
  variants: {
    color: {
      neutral: "link-neutral",
      primary: "link-primary",
      secondary: "link-secondary",
      accent: "link-accent",
      info: "link-info",
      success: "link-success",
      warning: "link-warning",
      error: "link-error",
    },
    variant: {
      hover: "link-hover",
    },
  },
});

type LinkVariants = VariantProps<typeof linkVariants>;

export type LinkProps = Omit<React.ComponentProps<"a">, "color"> &
  LinkVariants;

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ color, variant, className, ...props }, ref) => (
    <a
      ref={ref}
      className={linkVariants({ color, variant, className })}
      {...props}
    />
  )
);

Link.displayName = "Link";

export default Link;
