"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const filterVariants = tv({
  slots: {
    root: "filter",
    item: "btn",
    reset: "btn btn-square",
  },
  variants: {
    color: {
      neutral: { item: "btn-neutral" },
      primary: { item: "btn-primary" },
      secondary: { item: "btn-secondary" },
      accent: { item: "btn-accent" },
      info: { item: "btn-info" },
      success: { item: "btn-success" },
      warning: { item: "btn-warning" },
      error: { item: "btn-error" },
      ghost: { item: "btn-ghost" },
      outline: { item: "btn-outline" },
    },
    size: {
      xs: { item: "btn-xs", reset: "btn-xs" },
      sm: { item: "btn-sm", reset: "btn-sm" },
      md: { item: "btn-md", reset: "btn-md" },
      lg: { item: "btn-lg", reset: "btn-lg" },
      xl: { item: "btn-xl", reset: "btn-xl" },
    },
    mode: {
      form: { reset: "" },
      radio: { reset: "filter-reset" },
    },
  },
  defaultVariants: {
    mode: "form",
  },
});

type FilterContextValue = {
  name?: string;
  asForm: boolean;
};

const FilterContext = React.createContext<FilterContextValue>({
  asForm: true,
});

export type FilterProps = Omit<React.ComponentProps<"form">, "asForm"> & {
  asForm?: boolean;
  name?: string;
};

const Filter = React.forwardRef<HTMLFormElement, FilterProps>(
  ({ asForm = true, name, className, children, ...props }, ref) => {
    const Tag = asForm ? "form" : "div";
    const { root } = filterVariants();

    return (
      <FilterContext.Provider value={{ name, asForm }}>
        <Tag
          ref={ref as any}
          className={root({ className })}
          {...(props as any)}
        >
          {children}
        </Tag>
      </FilterContext.Provider>
    );
  },
);

Filter.displayName = "Filter";

export type FilterResetProps = Omit<
  React.ComponentProps<"input">,
  "type" | "size"
> & {
  mode?: "form" | "radio";
  size?: VariantProps<typeof filterVariants>["size"];
  label?: string;
};

const FilterReset = React.forwardRef<HTMLInputElement, FilterResetProps>(
  (
    { mode = "form", label = "×", className, size, name: nameProp, ...props },
    ref,
  ) => {
    const ctx = React.useContext(FilterContext);
    const name = nameProp ?? (mode === "radio" ? ctx.name : undefined);
    const { reset } = filterVariants({ mode, size });

    return (
      <input
        ref={ref}
        type={mode === "radio" ? "radio" : "reset"}
        className={reset({ className, size })}
        value={mode === "radio" ? undefined : label}
        aria-label={mode === "radio" ? label : undefined}
        name={name}
        autoComplete="off"
        {...props}
      />
    );
  },
);

FilterReset.displayName = "FilterReset";

type FilterItemVariants = VariantProps<typeof filterVariants>;

export type FilterItemProps = Omit<
  React.ComponentProps<"input">,
  "type" | "size" | "color"
> &
  FilterItemVariants & {
    type?: "radio" | "checkbox";
    label: string;
  };

const FilterItem = React.forwardRef<HTMLInputElement, FilterItemProps>(
  (
    {
      type = "radio",
      label,
      color,
      size,
      className,
      name: nameProp,
      mode,
      ...props
    },
    ref,
  ) => {
    const ctx = React.useContext(FilterContext);
    const name = nameProp ?? ctx.name;
    const { item } = filterVariants({ color, size });

    return (
      <input
        ref={ref}
        type={type}
        name={name}
        aria-label={label}
        autoComplete="off"
        className={item({ className })}
        {...props}
      />
    );
  },
);

FilterItem.displayName = "FilterItem";

const FilterComponent = Object.assign(Filter, {
  Reset: FilterReset,
  Item: FilterItem,
});

export { FilterComponent as Filter };
