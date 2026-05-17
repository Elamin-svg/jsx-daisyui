import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

type StepsVariantProps = VariantProps<typeof stepsVariants>;

export type StepsProps = React.ComponentProps<"ul"> &
  StepsVariantProps & {
    activeStep?: number;
    children: React.ReactNode;
  };

export type StepsItemProps = React.ComponentProps<"li">;

const stepsVariants = tv({
  slots: {
    root: "steps",
    item: "step",
  },
  variants: {
    direction: {
      horizontal: { root: "steps-horizontal" },
      vertical: { root: "steps-vertical" },
    },
    active: {
      true: { item: "step-primary" },
    },
  },
});

const Steps = React.forwardRef<HTMLUListElement, StepsProps>(
  (
    {
      className,
      direction,
      activeStep = 0,
      children,
      ...props
    },
    ref
  ) => {
    const { root, item } = stepsVariants({ direction });

    const items = React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) return child;

      const isActive = index <= activeStep;
      const currentClassName = (
        child as React.ReactElement<{ className?: string }>
      ).props.className;
      const itemClass = item({ active: isActive });
      const finalClassName = currentClassName
        ? `${itemClass} ${currentClassName}`
        : itemClass;

      return React.cloneElement(
        child as React.ReactElement<{ className?: string }>,
        { className: finalClassName }
      );
    });

    return (
      <ul ref={ref} className={root({ className })} {...props}>
        {items}
      </ul>
    );
  }
);

Steps.displayName = "Steps";

const StepsItem = React.forwardRef<HTMLLIElement, StepsItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={className} {...props} />
  )
);

StepsItem.displayName = "StepsItem";

const StepsComponent = Object.assign(Steps, {
  Item: StepsItem,
});

export { StepsComponent as Steps };
