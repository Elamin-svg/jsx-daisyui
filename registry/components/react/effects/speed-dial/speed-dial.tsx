import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const speedDialVariants = tv({
  slots: {
    root: "fab",
    trigger: "btn btn-circle btn-primary",
    flowerTrigger: "btn btn-circle btn-soft fab-main-action",
    action: "btn btn-circle",
  },
  variants: {
    variant: {
      default: { root: "fab" },
      flower: { root: "fab fab-flower" },
    },
    size: {
      sm: { trigger: "btn-sm", flowerTrigger: "btn-sm", action: "btn-sm" },
      md: { trigger: "btn-md", flowerTrigger: "btn-md", action: "btn-md" },
      lg: { trigger: "btn-lg", flowerTrigger: "btn-lg", action: "btn-lg" },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "lg",
  },
});

type SpeedDialVariants = VariantProps<typeof speedDialVariants>;

export type SpeedDialRootProps = Omit<React.ComponentProps<"div">, "size"> &
  SpeedDialVariants;

const SpeedDialRoot = React.forwardRef<HTMLDivElement, SpeedDialRootProps>(
  ({ variant, size, className, ...props }, ref) => {
    const { root } = speedDialVariants({ variant, size });
    return <div ref={ref} className={root({ className })} {...props} />;
  }
);

SpeedDialRoot.displayName = "SpeedDialRoot";

export type SpeedDialTriggerProps = Omit<React.ComponentProps<"div">, "size"> & {
  closeIcon?: React.ReactNode;
  mainAction?: React.ReactNode;
};

const SpeedDialTrigger = React.forwardRef<HTMLDivElement, SpeedDialTriggerProps>(
  ({ className, children, closeIcon, mainAction, ...props }, ref) => {
    const { trigger } = speedDialVariants();
    return (
      <div ref={ref} tabIndex={0} role="button" className={trigger({ className })} {...props}>
        {children}
        {closeIcon && <span className="fab-close">{closeIcon}</span>}
        {mainAction && <span className="fab-main-action">{mainAction}</span>}
      </div>
    );
  }
);

SpeedDialTrigger.displayName = "SpeedDialTrigger";

export type SpeedDialMainTriggerProps = Omit<React.ComponentProps<"button">, "size"> & {
  closeIcon?: React.ReactNode;
};

const SpeedDialMainTrigger = React.forwardRef<HTMLButtonElement, SpeedDialMainTriggerProps>(
  ({ className, children, closeIcon, ...props }, ref) => {
    const { flowerTrigger } = speedDialVariants();
    return (
      <button ref={ref} className={flowerTrigger({ className })} {...props}>
        {children}
        {closeIcon && <span className="fab-close">{closeIcon}</span>}
      </button>
    );
  }
);

SpeedDialMainTrigger.displayName = "SpeedDialMainTrigger";

export type SpeedDialActionProps = Omit<React.ComponentProps<"button">, "size"> & {
  label?: string;
};

const SpeedDialAction = React.forwardRef<HTMLButtonElement, SpeedDialActionProps>(
  ({ className, label, children, ...props }, ref) => {
    const { action } = speedDialVariants();
    const btn = (
      <button ref={ref} className={action({ className })} {...props}>
        {children}
      </button>
    );
    if (label) {
      return <div>{label} {btn}</div>;
    }
    return btn;
  }
);

SpeedDialAction.displayName = "SpeedDialAction";

const SpeedDial = Object.assign(SpeedDialRoot, {
  Trigger: SpeedDialTrigger,
  MainTrigger: SpeedDialMainTrigger,
  Action: SpeedDialAction,
});

export { SpeedDial };
