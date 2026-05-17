import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const joinVariants = tv({
  slots: {
    root: "join",
  },
  variants: {
    direction: {
      horizontal: { root: "join-horizontal" },
      vertical: { root: "join-vertical" },
    },
  },
});

type JoinVariants = VariantProps<typeof joinVariants>;

export type JoinProps = Omit<React.ComponentProps<"div">, "color"> & JoinVariants;

const Join = React.forwardRef<HTMLDivElement, JoinProps>(
  ({ direction, className, ...props }, ref) => {
    const { root } = joinVariants({ direction });
    return <div ref={ref} className={root({ className })} {...props} />;
  }
);

Join.displayName = "Join";
export default Join; 
