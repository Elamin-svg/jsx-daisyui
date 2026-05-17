"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const ratingVariants = tv({
  slots: {
    root: "rating",
    hidden: "rating-hidden",
  },
  variants: {
    size: {
      xs: { root: "rating-xs" },
      sm: { root: "rating-sm" },
      md: { root: "rating-md" },
      lg: { root: "rating-lg" },
      xl: { root: "rating-xl" },
    },
    half: {
      true: { root: "rating-half" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type RatingMask =
  | "mask-star"
  | "mask-star-2"
  | "mask-heart"
  | "mask-square"
  | "mask-circle";

export type RatingContextValue = {
  name: string;
  value: number | undefined;
  onValueChange?: (value: number) => void;
  disabled?: boolean;
  readOnly?: boolean;
  half?: boolean;
};

const RatingContext = React.createContext<RatingContextValue | null>(null);

function useRating() {
  const context = React.useContext(RatingContext);
  if (!context) {
    throw new Error("useRating must be used within a Rating");
  }
  return context;
}

export type RatingVariants = VariantProps<typeof ratingVariants>;

export type RatingProps = Omit<
  React.ComponentProps<"div">,
  "onChange" | keyof RatingVariants
> &
  RatingVariants & {
    name: string;
    value?: number;
    defaultValue?: number;
    onValueChange?: (value: number) => void;
    disabled?: boolean;
    readOnly?: boolean;
    half?: boolean;
  };

const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      name,
      value,
      defaultValue,
      onValueChange,
      disabled,
      readOnly,
      half,
      size,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState<
      number | undefined
    >(defaultValue);

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const handleChange = React.useCallback(
      (v: number) => {
        if (!isControlled) setInternalValue(v);
        onValueChange?.(v);
      },
      [isControlled, onValueChange],
    );

    const { root } = ratingVariants({ size, half });

    return (
      <RatingContext.Provider
        value={{
          name,
          value: currentValue,
          onValueChange: handleChange,
          disabled,
          readOnly,
          half,
        }}
      >
        <div
          ref={ref}
          className={root({ className })}
          role={readOnly ? "img" : undefined}
          aria-label={readOnly ? `Rating: ${currentValue}` : undefined}
          {...props}
        >
          {children}
        </div>
      </RatingContext.Provider>
    );
  },
);

Rating.displayName = "Rating";

export type RatingHiddenProps = React.ComponentProps<"input">;

const RatingHidden = React.forwardRef<HTMLInputElement, RatingHiddenProps>(
  ({ className, ...props }, ref) => {
    const { name } = useRating();
    const { hidden } = ratingVariants();

    return (
      <input
        ref={ref}
        type="radio"
        name={name}
        className={hidden({ className })}
        aria-label="clear"
        {...props}
      />
    );
  },
);

RatingHidden.displayName = "RatingHidden";

export type RatingItemProps = Omit<
  React.ComponentProps<"input">,
  "size" | "type"
> & {
  itemIndex: number;
  mask?: RatingMask;
  color?: string;
  halfSide?: "first" | "second";
};

const RatingItem = React.forwardRef<HTMLInputElement, RatingItemProps>(
  (
    {
      itemIndex,
      mask = "mask-star-2",
      color = "bg-orange-400",
      halfSide,
      className,
      ...props
    },
    ref,
  ) => {
    const { name, value, onValueChange, disabled, readOnly } = useRating();

    const halfClass =
      halfSide === "first"
        ? "mask-half-1"
        : halfSide === "second"
          ? "mask-half-2"
          : undefined;

    const classes = [
      "mask",
      mask,
      halfClass,
      color,
      itemIndex === value && "ring-2 ring-offset-1",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    if (readOnly) {
      return (
        <div
          className={classes}
          aria-label={`${itemIndex} star${itemIndex !== 1 ? "s" : ""}`}
          aria-current={itemIndex === value ? "true" : undefined}
        />
      );
    }

    return (
      <input
        ref={ref}
        type="radio"
        name={name}
        className={["mask", mask, halfClass, color, className]
          .filter(Boolean)
          .join(" ")}
        aria-label={`${itemIndex} star${itemIndex !== 1 ? "s" : ""}`}
        checked={value === itemIndex}
        disabled={disabled}
        onChange={() => onValueChange?.(itemIndex)}
        {...props}
      />
    );
  },
);

RatingItem.displayName = "RatingItem";

const RatingComponent = Object.assign(Rating, {
  Item: RatingItem,
  Hidden: RatingHidden,
});

export { RatingComponent as Rating };
