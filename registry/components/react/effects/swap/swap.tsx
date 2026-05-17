"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const swapVariants = tv({
  slots: {
    root: "swap",
    on: "swap-on",
    off: "swap-off",
    indeterminate: "swap-indeterminate",
  },
  variants: {
    effect: {
      rotate: { root: "swap-rotate" },
      flip: { root: "swap-flip" },
    },
    active: {
      true: { root: "swap-active" },
    },
  },
});

type SwapVariants = VariantProps<typeof swapVariants>;

export type SwapRootProps = Omit<
  React.ComponentProps<"label">,
  "onChange" | "effect" | "active"
> &
  SwapVariants & {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
  };

const SwapRoot = React.forwardRef<HTMLLabelElement, SwapRootProps>(
  (
    {
      effect,
      active,
      checked,
      defaultChecked,
      onChange,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [internal, setInternal] = React.useState(defaultChecked ?? false);
    const isControlled = checked !== undefined;
    const isActive = active || (isControlled ? checked : internal);

    const { root } = swapVariants({ effect, active: !!isActive });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (!isControlled) setInternal(e.target.checked);
      onChange?.(e.target.checked);
    }

    return (
      <label ref={ref} className={root({ className })} {...props}>
        <input
          type="checkbox"
          className="hidden"
          checked={isControlled ? checked : internal}
          onChange={handleChange}
          autoComplete="off"
        />
        {children}
      </label>
    );
  }
);

SwapRoot.displayName = "SwapRoot";

export type SwapOnProps = Omit<React.ComponentProps<"div">, "color">;

const SwapOn = React.forwardRef<HTMLDivElement, SwapOnProps>(
  ({ className, ...props }, ref) => {
    const { on } = swapVariants();
    return <div ref={ref} className={on({ className })} {...props} />;
  }
);

SwapOn.displayName = "SwapOn";

export type SwapOffProps = Omit<React.ComponentProps<"div">, "color">;

const SwapOff = React.forwardRef<HTMLDivElement, SwapOffProps>(
  ({ className, ...props }, ref) => {
    const { off } = swapVariants();
    return <div ref={ref} className={off({ className })} {...props} />;
  }
);

SwapOff.displayName = "SwapOff";

export type SwapIndeterminateProps = Omit<React.ComponentProps<"div">, "color">;

const SwapIndeterminate = React.forwardRef<HTMLDivElement, SwapIndeterminateProps>(
  ({ className, ...props }, ref) => {
    const { indeterminate } = swapVariants();
    return <div ref={ref} className={indeterminate({ className })} {...props} />;
  }
);

SwapIndeterminate.displayName = "SwapIndeterminate";

const Swap = Object.assign(SwapRoot, {
  On: SwapOn,
  Off: SwapOff,
  Indeterminate: SwapIndeterminate,
});

export { Swap };
