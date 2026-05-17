"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

type DockVariantProps = VariantProps<typeof dock>;

type DockContextValue = {
  value?: string;
  onValueChange?: (value: string) => void;
};

const dockLabelVariants = tv({
  base: "dock-label",
});

export type DockProps = React.ComponentProps<"div"> &
  DockVariantProps & {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
  };

export type DockItemProps = React.ComponentProps<"div"> & {
  value: string;
};

export type DockItemLabelProps = React.ComponentProps<"div">;

const dock = tv({
  slots: {
    root: "dock",
    item: "",
  },
  variants: {
    size: {
      xs: { root: "dock-xs" },
      sm: { root: "dock-sm" },
      md: { root: "dock-md" },
      lg: { root: "dock-lg" },
      xl: { root: "dock-xl" },
    },
    active: {
      true: { item: "dock-active" },
    },
  },
});

const DockContext = React.createContext<DockContextValue | null>(null);

function useDockContext() {
  const ctx = React.useContext(DockContext);
  if (!ctx) {
    throw new Error("Dock components must be used within Dock");
  }
  return ctx;
}

const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      size,
      className,
      value: valueProp,
      defaultValue,
      onValueChange,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue);

    const isControlled = valueProp !== undefined;
    const value = isControlled ? valueProp : internalValue;

    const handleChange = (next: string) => {
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    };

    const { root } = dock({ size });

    return (
      <DockContext.Provider value={{ value, onValueChange: handleChange }}>
        <div
          ref={ref}
          role="tablist"
          className={root({ className })}
          {...props}
        />
      </DockContext.Provider>
    );
  }
);

Dock.displayName = "Dock";

const DockItem = React.forwardRef<HTMLDivElement, DockItemProps>(
  ({ className, value, onClick, ...props }, ref) => {
    const { value: selected, onValueChange } = useDockContext();

    const isActive = selected === value;
    const { item } = dock({ active: isActive });

    return (
      <div
        ref={ref}
        role="tab"
        aria-selected={isActive}
        data-state={isActive ? "active" : "inactive"}
        className={item({ className })}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          onValueChange?.(value);
          onClick?.(e as any);
        }}
        {...props}
      />
    );
  }
);

DockItem.displayName = "DockItem";

const DockItemLabel = React.forwardRef<HTMLDivElement, DockItemLabelProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={dockLabelVariants({ className })}
      {...props}
    />
  )
);

DockItemLabel.displayName = "DockItemLabel";

const DockComponent = Object.assign(Dock, {
  Item: DockItem,
  ItemLabel: DockItemLabel,
});

export { DockComponent as Dock };
