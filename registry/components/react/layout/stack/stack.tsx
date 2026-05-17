import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const stackVariants = tv({
  base: "stack",
  variants: {
    align: {
      top: "stack-top",
      bottom: "stack-bottom",
      start: "stack-start",
      end: "stack-end",
    },
  },
  defaultVariants: {
    align: "bottom",
  },
});

type StackVariants = VariantProps<typeof stackVariants>;

export type StackProps = Omit<React.ComponentProps<"div">, "color"> &
  StackVariants;

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ align, className, ...props }, ref) => (
    <div
      ref={ref}
      className={stackVariants({ align, className })}
      {...props}
    />
  )
);

Stack.displayName = "Stack";

export default Stack;
