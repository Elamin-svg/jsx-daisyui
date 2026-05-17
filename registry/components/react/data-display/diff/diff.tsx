import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const diffVariants = tv({
  slots: {
    root: "diff",
    item1: "diff-item-1",
    item2: "diff-item-2",
    resizer: "diff-resizer",
  },
  variants: {
    aspect: {
      "16/9": { root: "aspect-16/9" },
      "4/3": { root: "aspect-4/3" },
      "1/1": { root: "aspect-square" },
    },
    rounded: {
      true: { root: "rounded-field" },
    },
  },
  defaultVariants: {
    aspect: "16/9",
    rounded: true,
  },
});

type DiffVariants = VariantProps<typeof diffVariants>;

export type DiffProps = Omit<React.ComponentProps<"figure">, "color"> & DiffVariants;

const Diff = React.forwardRef<HTMLElement, DiffProps>(
  ({ aspect, rounded, className, ...props }, ref) => {
    const { root } = diffVariants({ aspect, rounded });
    return <figure ref={ref} tabIndex={0} className={root({ className })} {...props} />;
  }
);

Diff.displayName = "Diff";

export type DiffItem1Props = Omit<React.ComponentProps<"div">, "color">;

const DiffItem1 = React.forwardRef<HTMLDivElement, DiffItem1Props>(
  ({ className, ...props }, ref) => {
    const { item1 } = diffVariants();
    return <div ref={ref} role="img" tabIndex={0} className={item1({ className })} {...props} />;
  }
);

DiffItem1.displayName = "DiffItem1";

export type DiffItem2Props = Omit<React.ComponentProps<"div">, "color">;

const DiffItem2 = React.forwardRef<HTMLDivElement, DiffItem2Props>(
  ({ className, ...props }, ref) => {
    const { item2 } = diffVariants();
    return <div ref={ref} role="img" className={item2({ className })} {...props} />;
  }
);

DiffItem2.displayName = "DiffItem2";

export type DiffResizerProps = Omit<React.ComponentProps<"div">, "color">;

const DiffResizer = React.forwardRef<HTMLDivElement, DiffResizerProps>(
  ({ className }, ref) => {
    const { resizer } = diffVariants();
    return <div ref={ref} className={resizer({ className })} />;
  }
);

DiffResizer.displayName = "DiffResizer";

const DiffComponent = Object.assign(Diff, {
  Item1: DiffItem1,
  Item2: DiffItem2,
  Resizer: DiffResizer,
});

export { DiffComponent as Diff };
