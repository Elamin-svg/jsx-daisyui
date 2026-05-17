"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

type PaginationContextValue = {
  value: number;
  onValueChange: (value: number) => void;
};

type PaginationProps = React.ComponentProps<"div"> & {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
};

const paginationWrapperVariants = tv({
  base: "join",
});

export type PaginationItemProps = React.ComponentProps<"button"> & {
  value: number | string;
  disabled?: boolean;
  size?: VariantProps<typeof pagination>["size"];
};

const PaginationContext = React.createContext<PaginationContextValue | null>(
  null,
);

function usePagination() {
  const ctx = React.useContext(PaginationContext);
  if (!ctx) throw new Error("Pagination must be used within Pagination");
  return ctx;
}

const pagination = tv({
  slots: {
    item: "join-item btn",
  },
  variants: {
    size: {
      xs: { item: "btn-xs" },
      sm: { item: "btn-sm" },
      md: { item: "btn-md" },
      lg: { item: "btn-lg" },
      xl: { item: "btn-xl" },
    },
    active: {
      true: { item: "btn-active" },
    },
    disabled: {
      true: { item: "btn-disabled" },
    },
  },
});

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      value: valueProp,
      defaultValue = 1,
      onValueChange,
      className,
      ...props
    },
    ref
  ) => {
    const [internal, setInternal] = React.useState(defaultValue);

    const isControlled = valueProp !== undefined;
    const value = isControlled ? valueProp : internal;

    const setValue = (v: number) => {
      if (!isControlled) setInternal(v);
      onValueChange?.(v);
    };

    return (
      <PaginationContext.Provider value={{ value, onValueChange: setValue }}>
        <div
          ref={ref}
          className={paginationWrapperVariants({ className })}
          {...props}
        />
      </PaginationContext.Provider>
    );
  }
);

Pagination.displayName = "Pagination";

const PaginationItem = React.forwardRef<HTMLButtonElement, PaginationItemProps>(
  ({ value, disabled, size = "md", className, ...props }, ref) => {
    const ctx = usePagination();

    const numericValue = typeof value === "string" ? NaN : value;
    const isActive = ctx.value === numericValue;

    const styles = pagination({ size, active: isActive, disabled });

    return (
      <button
        ref={ref}
        type="button"
        className={styles.item({ className })}
        disabled={disabled}
        data-active={isActive}
        onClick={() => ctx.onValueChange(numericValue)}
        {...props}
      >
        {value}
      </button>
    );
  }
);

PaginationItem.displayName = "PaginationItem";

const PaginationComponent = Object.assign(Pagination, {
  Item: PaginationItem,
});

export { PaginationComponent as Pagination };
