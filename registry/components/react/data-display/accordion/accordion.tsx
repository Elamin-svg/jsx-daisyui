"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const accordionVariants = tv({
  slots: {
    root: "collapse bg-base-100 border border-base-300",
    title: "collapse-title font-semibold",
    content: "collapse-content text-sm",
  },
  variants: {
    icon: {
      none: {},
      arrow: { root: "collapse-arrow" },
      plus: { root: "collapse-plus" },
    },
  },
  defaultVariants: {
    icon: "none",
  },
});

type AccordionVariants = VariantProps<typeof accordionVariants>;

export type AccordionProps = Omit<React.ComponentProps<"div">, "color"> &
  AccordionVariants & {
    name?: string;
    defaultChecked?: boolean;
  };

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ name, icon, defaultChecked, className, children, ...props }, ref) => {
    const { root } = accordionVariants({ icon });
    return (
      <div ref={ref} className={root({ className })} {...props}>
        <input
          type="radio"
          name={name}
          autoComplete="off"
          defaultChecked={defaultChecked}
        />
        {children}
      </div>
    );
  },
);

Accordion.displayName = "Accordion";

export type AccordionTitleProps = Omit<React.ComponentProps<"div">, "color">;

const AccordionTitle = React.forwardRef<HTMLDivElement, AccordionTitleProps>(
  ({ className, ...props }, ref) => {
    const { title } = accordionVariants();
    return <div ref={ref} className={title({ className })} {...props} />;
  },
);

AccordionTitle.displayName = "AccordionTitle";

export type AccordionContentProps = Omit<React.ComponentProps<"div">, "color">;

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, ...props }, ref) => {
  const { content } = accordionVariants();
  return <div ref={ref} className={content({ className })} {...props} />;
});

AccordionContent.displayName = "AccordionContent";

const AccordionComponent = Object.assign(Accordion, {
  Title: AccordionTitle,
  Content: AccordionContent,
});

export { AccordionComponent as Accordion };
