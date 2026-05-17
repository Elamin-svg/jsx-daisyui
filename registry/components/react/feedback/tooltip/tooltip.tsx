import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const tooltipVariants = tv({
  base: "tooltip",
  variants: {
    placement: {
      top: "tooltip-top",
      bottom: "tooltip-bottom",
      left: "tooltip-left",
      right: "tooltip-right",
    },
    color: {
      neutral: "tooltip-neutral",
      primary: "tooltip-primary",
      secondary: "tooltip-secondary",
      accent: "tooltip-accent",
      info: "tooltip-info",
      success: "tooltip-success",
      warning: "tooltip-warning",
      error: "tooltip-error",
    },
    open: {
      true: "tooltip-open",
    },
    responsive: {
      true: "lg:tooltip",
    },
  },
  defaultVariants: {
    placement: "top",
  },
});

type TooltipVariants = VariantProps<typeof tooltipVariants>;

type TooltipContextValue = {
  content?: React.ReactNode;
} & TooltipVariants;

const TooltipContext = React.createContext<TooltipContextValue | null>(null);

export type TooltipProps = Omit<React.ComponentProps<"div">, "color" | "open"> &
  TooltipVariants & {
    content?: React.ReactNode;
  };

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      content,
      placement,
      color,
      open,
      responsive,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <TooltipContext.Provider
        value={{ content, placement, color, open, responsive }}
      >
        <div
          ref={ref}
          className={tooltipVariants({
            placement,
            color,
            open,
            responsive,
            className,
          })}
          data-tip={typeof content === "string" ? content : undefined}
          {...props}
        >
          {children}
        </div>
      </TooltipContext.Provider>
    );
  },
);

Tooltip.displayName = "Tooltip";

const tooltipContentVariants = tv({
  base: "tooltip-content",
});

type TooltipContentVariants = VariantProps<typeof tooltipContentVariants>;

export type TooltipContentProps = Omit<React.ComponentProps<"div">, "color"> &
  TooltipContentVariants;

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={tooltipContentVariants({ className })}
        {...props}
      />
    );
  },
);

TooltipContent.displayName = "TooltipContent";

export type TooltipTriggerProps = React.ComponentProps<"div">;

const TooltipTrigger = React.forwardRef<HTMLDivElement, TooltipTriggerProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  },
);

TooltipTrigger.displayName = "TooltipTrigger";

const TooltipComponent = Object.assign(Tooltip, {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
});

export { TooltipComponent as Tooltip };
