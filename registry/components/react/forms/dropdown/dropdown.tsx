import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const dropdownVariants = tv({
  slots: {
    root: "dropdown",
    trigger: "btn",
    content:
      "dropdown-content border-base-200 border menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm",
    item: "",
  },
  variants: {
    position: {
      top: { root: "dropdown-top" },
      bottom: { root: "dropdown-bottom" },
      left: { root: "dropdown-left" },
      right: { root: "dropdown-right" },
    },
    align: {
      start: { root: "dropdown-start" },
      center: { root: "dropdown-center" },
      end: { root: "dropdown-end" },
    },
    hover: { true: { root: "dropdown-hover" } },
    open: { true: { root: "dropdown-open" } },
    close: { true: { root: "dropdown-close" } },
  },
});

type DropdownVariants = VariantProps<typeof dropdownVariants>;

export type DropdownProps = Omit<React.ComponentProps<"div">, "color"> &
  DropdownVariants;

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ position, align, hover, open, close, className, ...props }, ref) => {
    const { root } = dropdownVariants({ position, align, hover, open, close });
    return <div ref={ref} className={root({ className })} {...props} />;
  },
);

Dropdown.displayName = "Dropdown";

export type DropdownTriggerProps = Omit<
  React.ComponentProps<"button">,
  "color"
>;

const DropdownTrigger = React.forwardRef<
  HTMLButtonElement,
  DropdownTriggerProps
>(({ className, ...props }, ref) => {
  const { trigger } = dropdownVariants();
  return <button ref={ref} className={trigger({ className })} {...props} />;
});

DropdownTrigger.displayName = "DropdownTrigger";

export type DropdownContentProps = Omit<React.ComponentProps<"ul">, "color">;

const DropdownContent = React.forwardRef<
  HTMLUListElement,
  DropdownContentProps
>(({ className, ...props }, ref) => {
  const { content } = dropdownVariants();
  return (
    <ul ref={ref} tabIndex={0} className={content({ className })} {...props} />
  );
});

DropdownContent.displayName = "DropdownContent";

type Anchor = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  anchor?: true;
};

type NoAnchor = Pick<Anchor, "children"> & {
  anchor?: false;
};

export type DropdownItemProps = (Anchor | NoAnchor) & {
  className?: string;
};

const DropdownItem = React.forwardRef<HTMLAnchorElement, DropdownItemProps>(
  ({ anchor = true, className, ...props }, ref) => {
    const { item } = dropdownVariants();
    return (
      <li role="menuitem" className={item({ className })}>
        {anchor ? (
          <a
            ref={ref}
            {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          />
        ) : (
          props.children
        )}
      </li>
    );
  },
);

DropdownItem.displayName = "DropdownItem";

const DropdownComponent = Object.assign(Dropdown, {
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
});

export { DropdownComponent as Dropdown };
