import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const statVariants = tv({
  slots: {
    root: "stats shadow",
    item: "stat",
    title: "stat-title",
    value: "stat-value",
    desc: "stat-desc",
    figure: "stat-figure",
    actions: "stat-actions",
  },
  variants: {
    direction: {
      horizontal: { root: "stats-horizontal" },
      vertical: { root: "stats-vertical" },
      responsive: { root: "stats-vertical lg:stats-horizontal" },
    },
    centered: {
      true: { item: "place-items-center" },
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
});

type StatVariants = VariantProps<typeof statVariants>;

export type StatProps = Omit<React.ComponentProps<"div">, "color"> & StatVariants;

const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  ({ direction, className, ...props }, ref) => {
    const { root } = statVariants({ direction });
    return <div ref={ref} className={root({ className })} {...props} />;
  }
);

Stat.displayName = "Stat";

export type StatItemProps = Omit<React.ComponentProps<"div">, "color"> &
  Pick<StatVariants, "centered">;

const StatItem = React.forwardRef<HTMLDivElement, StatItemProps>(
  ({ centered, className, ...props }, ref) => {
    const { item } = statVariants({ centered });
    return <div ref={ref} className={item({ className })} {...props} />;
  }
);

StatItem.displayName = "StatItem";

export type StatTitleProps = Omit<React.ComponentProps<"div">, "color">;

const StatTitle = React.forwardRef<HTMLDivElement, StatTitleProps>(
  ({ className, ...props }, ref) => {
    const { title } = statVariants();
    return <div ref={ref} className={title({ className })} {...props} />;
  }
);

StatTitle.displayName = "StatTitle";

export type StatValueProps = Omit<React.ComponentProps<"div">, "color">;

const StatValue = React.forwardRef<HTMLDivElement, StatValueProps>(
  ({ className, ...props }, ref) => {
    const { value } = statVariants();
    return <div ref={ref} className={value({ className })} {...props} />;
  }
);

StatValue.displayName = "StatValue";

export type StatDescProps = Omit<React.ComponentProps<"div">, "color">;

const StatDesc = React.forwardRef<HTMLDivElement, StatDescProps>(
  ({ className, ...props }, ref) => {
    const { desc } = statVariants();
    return <div ref={ref} className={desc({ className })} {...props} />;
  }
);

StatDesc.displayName = "StatDesc";

export type StatFigureProps = Omit<React.ComponentProps<"div">, "color">;

const StatFigure = React.forwardRef<HTMLDivElement, StatFigureProps>(
  ({ className, ...props }, ref) => {
    const { figure } = statVariants();
    return <div ref={ref} className={figure({ className })} {...props} />;
  }
);

StatFigure.displayName = "StatFigure";

export type StatActionsProps = Omit<React.ComponentProps<"div">, "color">;

const StatActions = React.forwardRef<HTMLDivElement, StatActionsProps>(
  ({ className, ...props }, ref) => {
    const { actions } = statVariants();
    return <div ref={ref} className={actions({ className })} {...props} />;
  }
);

StatActions.displayName = "StatActions";

const StatComponent = Object.assign(Stat, {
  Item: StatItem,
  Title: StatTitle,
  Value: StatValue,
  Desc: StatDesc,
  Figure: StatFigure,
  Actions: StatActions,
});

export { StatComponent as Stat };
