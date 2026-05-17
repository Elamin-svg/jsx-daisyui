import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const collapseVariants = tv({
  slots: {
    root: "collapse bg-base-100 border border-base-300",
    title: "collapse-title font-semibold",
    content: "collapse-content text-sm",
  },
  variants: {
    icon: {
      none: { root: "" },
      arrow: { root: "collapse-arrow" },
      plus: { root: "collapse-plus" },
    },
    open: { true: { root: "collapse-open" } },
    close: { true: { root: "collapse-close" } },
    iconStart: {
      true: { title: "after:start-5 after:end-auto pe-4 ps-12" },
    },
  },
  defaultVariants: {
    icon: "none",
  },
});

type CollapseVariants = VariantProps<typeof collapseVariants>;

export type CollapseProps = Omit<React.ComponentProps<"div">, "color" | "open"> &
  CollapseVariants & {
    method?: "focus" | "checkbox" | "details";
  };

const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  ({ icon, open, close, method = "focus", className, children, ...props }, ref) => {
    const { root } = collapseVariants({ icon, open, close });
    if (method === "details") {
      return (
        <details className={root({ className })}>
          {children}
        </details>
      );
    }
    return (
      <div
        ref={ref}
        tabIndex={method === "focus" ? 0 : undefined}
        className={root({ className })}
        {...props}
      >
        {method === "checkbox" && <input type="checkbox" autoComplete="off" />}
        {children}
      </div>
    );
  }
);

Collapse.displayName = "Collapse";

export type CollapseTitleProps = Omit<React.ComponentProps<"div">, "color"> &
  Pick<CollapseVariants, "iconStart">;

const CollapseTitle = React.forwardRef<HTMLDivElement, CollapseTitleProps>(
  ({ iconStart, className, ...props }, ref) => {
    const { title } = collapseVariants({ iconStart });
    return <div ref={ref} className={title({ className })} {...props} />;
  }
);

CollapseTitle.displayName = "CollapseTitle";

export type CollapseSummaryProps = Omit<React.ComponentProps<"summary">, "color">;

const CollapseSummary = React.forwardRef<HTMLElement, CollapseSummaryProps>(
  ({ className, ...props }, ref) => {
    const { title } = collapseVariants();
    return <summary ref={ref} className={title({ className })} {...props} />;
  }
);

CollapseSummary.displayName = "CollapseSummary";

export type CollapseContentProps = Omit<React.ComponentProps<"div">, "color">;

const CollapseContent = React.forwardRef<HTMLDivElement, CollapseContentProps>(
  ({ className, ...props }, ref) => {
    const { content } = collapseVariants();
    return <div ref={ref} className={content({ className })} {...props} />;
  }
);

CollapseContent.displayName = "CollapseContent";

const CollapseComponent = Object.assign(Collapse, {
  Title: CollapseTitle,
  Summary: CollapseSummary,
  Content: CollapseContent,
});

export { CollapseComponent as Collapse };
