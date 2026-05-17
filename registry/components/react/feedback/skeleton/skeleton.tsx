import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const skeletonVariants = tv({
  base: "skeleton",
  variants: {
    variant: {
      default: "skeleton",
      text: "skeleton skeleton-text",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type SkeletonVariants = VariantProps<typeof skeletonVariants>;

export type SkeletonProps = Omit<React.ComponentProps<"div">, "color"> & SkeletonVariants;

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <div ref={ref} className={skeletonVariants({ variant, className })} {...props} />
    );
  }
);

Skeleton.displayName = "Skeleton";

export default Skeleton;
