"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const accordionVariants = tv({
  slots: {
    root: "",
    item: "collapse bg-base-100 border border-base-300 mt-2",
    title: "collapse-title font-semibold",
    content: "collapse-content text-sm",
  },
  variants: {
    icon: {
      none: { item: "" },
      arrow: { item: "collapse-arrow" },
      plus: { item: "collapse-plus" },
    },
    joined: {
      true: { root: "join join-vertical bg-base-100", item: "join-item mt-0" },
    },
  },
  defaultVariants: {
    icon: "none",
  },
});

type AccordionVariants = VariantProps<typeof accordionVariants>;

type AccordionContextValue = { name: string };
const AccordionContext = React.createContext<AccordionContextValue>({
  name: "",
});
const useAccordion = () => React.useContext(AccordionContext);

export type AccordionProps = Omit<React.ComponentProps<"div">, "color"> &
  AccordionVariants & {
    name?: string;
  };

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ name, joined, icon, className, children, ...props }, ref) => {
    const { root } = accordionVariants({ joined });
    const id = React.useId();
    const resolvedName = name ?? id;
    return (
      <AccordionContext.Provider value={{ name: resolvedName }}>
        <div ref={ref} className={root({ className })} {...props}>
          {/* Propagate icon/joined down via context if needed, or just pass through children */}
          {children}
        </div>
      </AccordionContext.Provider>
    );
  },
);

Accordion.displayName = "Accordion";

export type AccordionItemProps = Omit<React.ComponentProps<"div">, "color"> &
  AccordionVariants & {
    defaultOpen?: boolean;
  };

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ icon, joined, defaultOpen, className, children, ...props }, ref) => {
    const { name } = useAccordion();
    const { item } = accordionVariants({ icon, joined });
    return (
      <div ref={ref} className={item({ className })} {...props}>
        <input
          type="radio"
          name={name}
          autoComplete="off"
          defaultChecked={defaultOpen}
          className="hidden"
        />
        {children}
      </div>
    );
  },
);

AccordionItem.displayName = "AccordionItem";

export type AccordionTriggerProps = Omit<React.ComponentProps<"div">, "color">;

const AccordionTrigger = React.forwardRef<
  HTMLDivElement,
  AccordionTriggerProps
>(({ className, ...props }, ref) => {
  const { title } = accordionVariants();
  return <div ref={ref} className={title({ className })} {...props} />;
});

AccordionTrigger.displayName = "AccordionTrigger";

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
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export { AccordionComponent as Accordion };
