import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const indicatorVariants = tv({
  slots: {
    root: "indicator",
    item: "indicator-item size-fit",
  },
  variants: {
    horizontal: {
      start: { item: "indicator-start" },
      center: { item: "indicator-center" },
      end: { item: "indicator-end" },
    },
    vertical: {
      top: { item: "indicator-top" },
      middle: { item: "indicator-middle" },
      bottom: { item: "indicator-bottom" },
    },
  },
  defaultVariants: {
    horizontal: "end",
    vertical: "top",
  },
});

export type IndicatorProps = React.ComponentProps<"div">;

const Indicator = React.forwardRef<HTMLDivElement, IndicatorProps>(
  ({ className, ...props }, ref) => {
    const { root } = indicatorVariants();
    return <div ref={ref} className={root({ className })} {...props} />;
  }
);

Indicator.displayName = "Indicator";

type IndicatorItemVariants = VariantProps<typeof indicatorVariants>;

export type IndicatorItemProps = Omit<React.ComponentProps<"span">, "color"> &
  Pick<IndicatorItemVariants, "horizontal" | "vertical">;

const IndicatorItem = React.forwardRef<HTMLSpanElement, IndicatorItemProps>(
  ({ horizontal, vertical, className, ...props }, ref) => {
    const { item } = indicatorVariants({ horizontal, vertical });
    return <span ref={ref} className={item({ className })} {...props} />;
  }
);

IndicatorItem.displayName = "IndicatorItem";

const IndicatorComponent = Object.assign(Indicator, {
  Item: IndicatorItem,
});

export { IndicatorComponent as Indicator };