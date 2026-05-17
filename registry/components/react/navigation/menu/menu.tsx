"use client";

import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const menu = tv({
  slots: {
    root: "menu",
    title: "menu-title",
  },
  variants: {
    size: {
      xs: { root: "menu-xs" },
      sm: { root: "menu-sm" },
      md: { root: "menu-md" },
      lg: { root: "menu-lg" },
      xl: { root: "menu-xl" },
    },
    direction: {
      vertical: { root: "menu-vertical" },
      horizontal: { root: "menu-horizontal" },
    },
  },
  defaultVariants: {
    size: "md",
    direction: "vertical",
  },
});

type MenuContextValue = {
  active?: string;
};

const MenuContext = React.createContext<MenuContextValue>({});

type MenuProps = React.ComponentProps<"ul"> &
  VariantProps<typeof menu> & {
    active?: string;
  };

export type MenuItemProps = React.ComponentProps<"li"> & {
  disabled?: boolean;
  value?: string;
};

export type MenuTitleProps = React.ComponentProps<"li">;
export type SubMenuProps = React.ComponentProps<"ul">;

const Menu = React.forwardRef<HTMLUListElement, MenuProps>(
  ({ size, direction, active, className, children, ...props }, ref) => {
    const { root } = menu({ size, direction });
    return (
      <MenuContext.Provider value={{ active }}>
        <ul ref={ref} className={root({ className })} {...props}>
          {children}
        </ul>
      </MenuContext.Provider>
    );
  },
);
Menu.displayName = "Menu";

const MenuItem = React.forwardRef<HTMLLIElement, MenuItemProps>(
  ({ disabled, value, className, children, ...props }, ref) => {
    const ctx = React.useContext(MenuContext);
    const isActive = value !== undefined && ctx.active === value;

    const childArray = React.Children.toArray(children);
    const [first, ...rest] = childArray;

    const clonedFirst =
      isActive && React.isValidElement(first)
        ? React.cloneElement(first as React.ReactElement<any>, {
          className: [
            (first as React.ReactElement<any>).props.className,
            "menu-active",
          ]
            .filter(Boolean)
            .join(" "),
        })
        : first;

    return (
      <li
        ref={ref}
        className={[disabled ? "menu-disabled" : "", className]
          .filter(Boolean)
          .join(" ") || undefined}
        {...props}
      >
        {clonedFirst}
        {rest}
      </li>
    );
  },
);
MenuItem.displayName = "MenuItem";

const MenuTitle = React.forwardRef<HTMLLIElement, MenuTitleProps>(
  ({ className, ...props }, ref) => {
    const { title } = menu();
    return <li ref={ref} className={title({ className })} {...props} />;
  },
);
MenuTitle.displayName = "MenuTitle";

const SubMenu = React.forwardRef<HTMLUListElement, SubMenuProps>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={className} {...props} />
  ),
);
SubMenu.displayName = "SubMenu";

const MenuComponent = Object.assign(Menu, {
  Item: MenuItem,
  Title: MenuTitle,
  SubMenu: SubMenu,
});

export { MenuComponent as Menu };