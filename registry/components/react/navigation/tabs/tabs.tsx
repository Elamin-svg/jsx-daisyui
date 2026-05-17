"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

type TabsContextValue = {
  value: string;
  onValueChange: (value: string) => void;
  variant: VariantProps<typeof tabs>["variant"];
  size: VariantProps<typeof tabs>["size"];
};

type TabsVariantProps = VariantProps<typeof tabs>;

type TabsProps = React.ComponentProps<"div"> & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  variant?: TabsVariantProps["variant"];
  size?: TabsVariantProps["size"];
};

type TabsListProps = React.ComponentProps<"div"> & {
  variant?: TabsVariantProps["variant"];
  size?: TabsVariantProps["size"];
};

export type TabsTriggerProps = React.ComponentProps<"button"> & {
  value: string;
};

type TabsContentProps = React.ComponentProps<"div"> & {
  value: string;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabs() {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error("Tabs must be used within Tabs");
  return ctx;
}

const tabs = tv({
  slots: {
    root: "flex flex-col gap-2",
    list: "tabs inline-flex items-center",
    trigger: "tab transition-all",
    content: "",
  },
  variants: {
    variant: {
      default: {
        list: "",
      },
      border: {
        list: "tabs-border",
      },
      lift: {
        list: "tabs-lift",
      },
      box: {
        list: "tabs-box",
      },
    },
    size: {
      xs: {
        list: "tabs-xs",
      },
      sm: {
        list: "tabs-sm",
      },
      md: {
        list: "tabs-md",
      },
      lg: {
        list: "tabs-lg",
      },
      xl: {
        list: "tabs-xl",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      value: valueProp,
      defaultValue,
      onValueChange,
      variant = "default",
      size = "md",
      className,
      ...props
    },
    ref,
  ) => {
    const [internal, setInternal] = React.useState(defaultValue ?? "");

    const isControlled = valueProp !== undefined;
    const value = isControlled ? valueProp : internal;

    const setValue = (v: string) => {
      if (!isControlled) setInternal(v);
      onValueChange?.(v);
    };

    const { root } = tabs({ variant, size });

    return (
      <TabsContext.Provider
        value={{ value, onValueChange: setValue, variant, size }}
      >
        <div ref={ref} className={root({ className })} {...props}>
          {props.children}
        </div>
      </TabsContext.Provider>
    );
  },
);

Tabs.displayName = "Tabs";

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, variant, size, ...props }, ref) => {
    const ctx = useTabs();

    const { list } = tabs({
      variant: variant ?? ctx.variant,
      size: size ?? ctx.size,
    });

    return (
      <div
        ref={ref}
        role="tablist"
        data-slot="tabs-list"
        className={list({ className })}
        {...props}
      >
        {props.children}
      </div>
    );
  },
);

TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, className, ...props }, ref) => {
    const ctx = useTabs();
    const isActive = ctx.value === value;

    const { trigger } = tabs();
    const activeClass = isActive ? "tab-active" : "";

    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        data-slot="tabs-trigger"
        data-state={isActive ? "active" : "inactive"}
        className={trigger({
          className: `${activeClass}${className ? ` ${className}` : ""}`,
        })}
        onClick={() => ctx.onValueChange(value)}
        {...props}
      >
        {props.children}
      </button>
    );
  },
);

TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value, className, ...props }, ref) => {
    const ctx = useTabs();
    const active = ctx.value;

    if (active !== value) return null;

    const { content } = tabs();

    return (
      <div
        ref={ref}
        role="tabpanel"
        data-slot="tabs-content"
        className={content({ className })}
        {...props}
      >
        {props.children}
      </div>
    );
  },
);

TabsContent.displayName = "TabsContent";

const TabsComponent = Object.assign(Tabs, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
});

export { TabsComponent as Tabs };
