import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

type NavbarProps = React.ComponentProps<"div"> &
  VariantProps<typeof navbar>;

export type NavbarSlotProps = React.ComponentProps<"div">;

const navbar = tv({
  slots: {
    root: "navbar",
    start: "navbar-start",
    center: "navbar-center",
    end: "navbar-end",
  },
});

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ className, ...props }, ref) => {
    const { root } = navbar();
    return <div ref={ref} className={root({ className })} {...props} />;
  }
);

Navbar.displayName = "Navbar";

const NavbarStart = React.forwardRef<HTMLDivElement, NavbarSlotProps>(
  ({ className, ...props }, ref) => {
    const { start } = navbar();
    return <div ref={ref} className={start({ className })} {...props} />;
  }
);

NavbarStart.displayName = "NavbarStart";

const NavbarCenter = React.forwardRef<HTMLDivElement, NavbarSlotProps>(
  ({ className, ...props }, ref) => {
    const { center } = navbar();
    return <div ref={ref} className={center({ className })} {...props} />;
  }
);

NavbarCenter.displayName = "NavbarCenter";

const NavbarEnd = React.forwardRef<HTMLDivElement, NavbarSlotProps>(
  ({ className, ...props }, ref) => {
    const { end } = navbar();
    return <div ref={ref} className={end({ className })} {...props} />;
  }
);

NavbarEnd.displayName = "NavbarEnd";

const NavbarComponent = Object.assign(Navbar, {
  Start: NavbarStart,
  Center: NavbarCenter,
  End: NavbarEnd,
});

export { NavbarComponent as Navbar };
