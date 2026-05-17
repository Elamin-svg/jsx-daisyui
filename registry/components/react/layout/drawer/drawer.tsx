"use client";

import * as React from "react";
import { tv } from "tailwind-variants";

export function useDrawer(defaultOpen = false) {
  const [open, setOpen] = React.useState(defaultOpen);

  const toggle = React.useCallback(() => {
    setOpen((v) => !v);
  }, []);

  const close = React.useCallback(() => {
    setOpen(false);
  }, []);

  const openDrawer = React.useCallback(() => {
    setOpen(true);
  }, []);

  return {
    open,
    setOpen,
    toggle,
    close,
    openDrawer,
  };
}

const drawerVariants = tv({
  base: "drawer",
  variants: {
    end: {
      true: "drawer-end",
    },
  },
});

type DrawerContextValue = {
  open: boolean;
  close: () => void;
  toggle: () => void;
  openDrawer: () => void;
};

const DrawerContext = React.createContext<DrawerContextValue | null>(null);

function useDrawerContext() {
  const ctx = React.useContext(DrawerContext);

  if (!ctx) {
    throw new Error("Drawer components must be used inside Drawer");
  }

  return ctx;
}

export type DrawerProps = React.ComponentProps<"div"> & {
  open?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  onToggle?: () => void;
  end?: boolean;
};

const DrawerRoot = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      children,
      open = false,
      onClose,
      onOpen,
      onToggle,
      end,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <DrawerContext.Provider
        value={{
          open,
          close: onClose ?? (() => {}),
          openDrawer: onOpen ?? (() => {}),
          toggle: onToggle ?? (() => {}),
        }}
      >
        <div
          ref={ref}
          aria-expanded={open}
          className={drawerVariants({
            end,
            className,
          })}
          {...props}
        >
          <input
            type="checkbox"
            className="drawer-toggle"
            checked={open}
            readOnly
          />

          {children}
        </div>
      </DrawerContext.Provider>
    );
  },
);

DrawerRoot.displayName = "Drawer";

const DrawerContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`drawer-content ${className ?? ""}`} {...props} />
));

DrawerContent.displayName = "DrawerContent";

const DrawerSide = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, children, ...props }, ref) => {
  const { close } = useDrawerContext();

  return (
    <div ref={ref} className={`drawer-side ${className ?? ""}`} {...props}>
      <label
        aria-label="close drawer"
        className="drawer-overlay"
        onClick={close}
      />

      {children}
    </div>
  );
});

DrawerSide.displayName = "DrawerSide";

const DrawerClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ onClick, ...props }, ref) => {
  const { close } = useDrawerContext();

  return (
    <button
      ref={ref}
      type="button"
      onClick={(e) => {
        close();
        onClick?.(e);
      }}
      {...props}
    />
  );
});

DrawerClose.displayName = "DrawerClose";

export const Drawer = Object.assign(DrawerRoot, {
  Content: DrawerContent,
  Side: DrawerSide,
  Close: DrawerClose,
});
