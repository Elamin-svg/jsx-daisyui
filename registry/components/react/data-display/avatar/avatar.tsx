import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const avatarVariants = tv({
  slots: {
    root: "avatar",
    inner: "",
  },
  variants: {
    size: {
      xs: { inner: "w-8" },
      sm: { inner: "w-12" },
      md: { inner: "w-16" },
      lg: { inner: "w-24" },
      xl: { inner: "w-32" },
    },
    shape: {
      square: { inner: "rounded" },
      rounded: { inner: "rounded-xl" },
      circle: { inner: "rounded-full" },
      heart: { inner: "mask mask-heart" },
      squircle: { inner: "mask mask-squircle" },
      hexagon: { inner: "mask mask-hexagon-2" },
    },
    status: {
      online: { root: "avatar-online" },
      offline: { root: "avatar-offline" },
    },
    placeholder: {
      true: {
        root: "avatar-placeholder",
        inner: "bg-neutral text-neutral-content",
      },
    },
    ring: {
      true: { inner: "ring-2 ring-primary ring-offset-base-100 ring-offset-2" },
    },
  },
  defaultVariants: {
    size: "md",
    shape: "circle",
  },
});

type AvatarVariants = VariantProps<typeof avatarVariants>;

export type AvatarProps = Omit<React.ComponentProps<"div">, "placeholder" | "color"> &
  AvatarVariants & {
    src?: string;
    alt?: string;
  };

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt, children, size, shape, status, placeholder, ring, className, ...props }, ref) => {
    const { root, inner } = avatarVariants({ size, shape, status, placeholder, ring });
    return (
      <div ref={ref} className={root({ className })} {...props}>
        <div className={inner()}>
          {src ? <img src={src} alt={alt} /> : children}
        </div>
      </div>
    );
  },
);
Avatar.displayName = "Avatar";

export type AvatarPlaceholderProps = Omit<React.ComponentProps<"span">, "color">;

const AvatarPlaceholder = React.forwardRef<HTMLSpanElement, AvatarPlaceholderProps>(
  (props, ref) => <span ref={ref} {...props} />,
);
AvatarPlaceholder.displayName = "AvatarPlaceholder";

export type AvatarGroupProps = Omit<React.ComponentProps<"div">, "color">;

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={`avatar-group -space-x-6 ${className ?? ""}`} {...props} />
  ),
);
AvatarGroup.displayName = "AvatarGroup";

export type AvatarCounterProps = Omit<React.ComponentProps<"div">, "placeholder" | "color"> &
  AvatarVariants & {
    count: number;
  };

const AvatarCounter = React.forwardRef<HTMLDivElement, AvatarCounterProps>(
  ({ count, size, shape, className, ...props }, ref) => {
    const { root, inner } = avatarVariants({ size, shape, placeholder: true });
    return (
      <div ref={ref} className={root({ className })} {...props}>
        <div className={inner()}>
          <span>+{count}</span>
        </div>
      </div>
    );
  },
);
AvatarCounter.displayName = "AvatarCounter";

const AvatarComponent = Object.assign(Avatar, {
  Group: AvatarGroup,
  Counter: AvatarCounter,
  Placeholder: AvatarPlaceholder,
});

export { AvatarComponent as Avatar };