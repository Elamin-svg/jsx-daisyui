import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const carouselVariants = tv({
  slots: {
    root: "carousel",
    item: "carousel-item",
    indicators: "flex justify-center w-full py-2 gap-2",
  },
  variants: {
    snap: {
      start: { root: "carousel-start" },
      center: { root: "carousel-center" },
      end: { root: "carousel-end" },
    },
    direction: {
      horizontal: { root: "carousel-horizontal" },
      vertical: { root: "carousel-vertical" },
    },
    full: {
      true: { item: "w-full" },
    },
  },
  defaultVariants: {
    snap: "start",
  },
});

type CarouselVariants = VariantProps<typeof carouselVariants>;

export type CarouselProps = Omit<React.ComponentProps<"div">, "color"> & CarouselVariants;

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ snap, direction, className, ...props }, ref) => {
    const { root } = carouselVariants({ snap, direction });
    return <div ref={ref} className={root({ className })} {...props} />;
  }
);

Carousel.displayName = "Carousel";

export type CarouselItemProps = Omit<React.ComponentProps<"div">, "color"> &
  Pick<CarouselVariants, "full">;

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ full, className, ...props }, ref) => {
    const { item } = carouselVariants({ full });
    return <div ref={ref} className={item({ className })} {...props} />;
  }
);

CarouselItem.displayName = "CarouselItem";

export type CarouselIndicatorsProps = {
  count: number;
  prefix?: string;
  className?: string;
};

const CarouselIndicators = React.forwardRef<HTMLDivElement, CarouselIndicatorsProps>(
  ({ count, prefix = "item", className }, ref) => {
    const { indicators } = carouselVariants();
    return (
      <div ref={ref} className={indicators({ className })}>
        {Array.from({ length: count }).map((_, i) => (
          <a key={i} href={`#${prefix}${i + 1}`} className="btn btn-xs">
            {i + 1}
          </a>
        ))}
      </div>
    );
  }
);

CarouselIndicators.displayName = "CarouselIndicators";

const CarouselComponent = Object.assign(Carousel, {
  Item: CarouselItem,
  Indicators: CarouselIndicators,
});

export { CarouselComponent as Carousel };
