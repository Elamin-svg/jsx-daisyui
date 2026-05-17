import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const textRotateVariants = tv({
  base: "text-rotate!",
  variants: {
    centered: {
      true: "justify-items-center",
    },
    duration: {
      75: "duration-75",
      100: "duration-100",
      150: "duration-150",
      200: "duration-200",
      300: "duration-300",
      500: "duration-500",
      700: "duration-700",
      1000: "duration-1000",
    },
  },
  defaultVariants: {
    centered: false,
  },
});

type TextRotateVariants = VariantProps<typeof textRotateVariants>;

export type TextRotateProps = Omit<React.ComponentProps<"span">, "color"> &
  TextRotateVariants;

const TextRotate = React.forwardRef<HTMLSpanElement, TextRotateProps>(
  ({ centered, duration, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={textRotateVariants({ centered, duration, className })}
        {...props}
      >
        {children}
      </span>
    );
  }
);

TextRotate.displayName = "TextRotate";

const textRotateItemVariants = tv({
  base: "",
});

type TextRotateItemVariants = VariantProps<typeof textRotateItemVariants>;

export type TextRotateItemProps = Omit<React.ComponentProps<"span">, "color"> &
  TextRotateItemVariants;

const TextRotateItem = React.forwardRef<HTMLSpanElement, TextRotateItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <span ref={ref} className={textRotateItemVariants({ className })} {...props} />
    );
  }
);

TextRotateItem.displayName = "TextRotateItem";

const textRotateListVariants = tv({
  base: "",
});

type TextRotateListVariants = VariantProps<typeof textRotateListVariants>;

export type TextRotateListProps = Omit<React.ComponentProps<"span">, "color"> &
  TextRotateListVariants;

const TextRotateList = React.forwardRef<HTMLSpanElement, TextRotateListProps>(
  ({ className, ...props }, ref) => {
    return (
      <span ref={ref} className={textRotateListVariants({ className })} {...props} />
    );
  }
);

TextRotateList.displayName = "TextRotateList";

const TextRotateComponent = Object.assign(TextRotate, {
  Item: TextRotateItem,
  List: TextRotateList,
});

export { TextRotateComponent as TextRotate };
