import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const timelineVariants = tv({
  slots: {
    root: "timeline",
    item: "",
    start: "timeline-start",
    startBox: "timeline-box",
    middle: "timeline-middle",
    end: "timeline-end",
    endBox: "timeline-box",
  },
  variants: {
    direction: {
      horizontal: { root: "timeline-horizontal" },
      vertical: { root: "timeline-vertical" },
    },
    snapIcon: {
      true: { root: "timeline-snap-icon" },
    },
    compact: {
      true: { root: "timeline-compact" },
    },
    box: {
      true: { start: "timeline-box", end: "timeline-box" },
    },
  },
});

type TimelineVariants = VariantProps<typeof timelineVariants>;

export type TimelineProps = Omit<React.ComponentProps<"ul">, "color"> & TimelineVariants;

const Timeline = React.forwardRef<HTMLUListElement, TimelineProps>(
  ({ direction, snapIcon, compact, className, ...props }, ref) => {
    const { root } = timelineVariants({ direction, snapIcon, compact });
    return <ul ref={ref} className={root({ className })} {...props} />;
  }
);

Timeline.displayName = "Timeline";

export type TimelineItemProps = Omit<React.ComponentProps<"li">, "color"> & {
  first?: boolean;
  last?: boolean;
  lineColor?: string;
};

const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ first, last, lineColor, className, children, ...props }, ref) => {
    const { item } = timelineVariants();
    return (
      <li ref={ref} className={item({ className })} {...props}>
        {!first && <hr className={lineColor} />}
        {children}
        {!last && <hr className={lineColor} />}
      </li>
    );
  }
);

TimelineItem.displayName = "TimelineItem";

export type TimelineStartProps = Omit<React.ComponentProps<"span">, "color"> & {
  box?: boolean;
};

const TimelineStart = React.forwardRef<HTMLSpanElement, TimelineStartProps>(
  ({ box, className, ...props }, ref) => {
    const { start } = timelineVariants({ box });
    return <span ref={ref} className={start({ className })} {...props} />;
  }
);

TimelineStart.displayName = "TimelineStart";

export type TimelineMiddleProps = Omit<React.ComponentProps<"span">, "color">;

const TimelineMiddle = React.forwardRef<HTMLSpanElement, TimelineMiddleProps>(
  ({ className, ...props }, ref) => {
    const { middle } = timelineVariants();
    return <span ref={ref} className={middle({ className })} {...props} />;
  }
);

TimelineMiddle.displayName = "TimelineMiddle";

export type TimelineEndProps = Omit<React.ComponentProps<"span">, "color"> & {
  box?: boolean;
};

const TimelineEnd = React.forwardRef<HTMLSpanElement, TimelineEndProps>(
  ({ box, className, ...props }, ref) => {
    const { end } = timelineVariants({ box });
    return <span ref={ref} className={end({ className })} {...props} />;
  }
);

TimelineEnd.displayName = "TimelineEnd";

const TimelineComponent = Object.assign(Timeline, {
  Item: TimelineItem,
  Start: TimelineStart,
  Middle: TimelineMiddle,
  End: TimelineEnd,
});

export { TimelineComponent as Timeline };
