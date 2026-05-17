import * as React from "react";
import { tv } from "tailwind-variants";

const heroVariants = tv({
  slots: {
    root: "hero",
    content: "hero-content",
    overlay: "hero-overlay",
  },
});

export type HeroProps = React.ComponentProps<"div"> & {
  backgroundImage?: string;
};

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      backgroundImage,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const { root } = heroVariants();
    return (
      <div
        ref={ref}
        className={root({ className })}
        style={
          backgroundImage
            ? { backgroundImage: `url(${backgroundImage})`, ...style }
            : style
        }
        {...props}
      />
    );
  }
);

Hero.displayName = "Hero";

export type HeroContentProps = React.ComponentProps<"div">;

const HeroContent = React.forwardRef<HTMLDivElement, HeroContentProps>(
  ({ className, ...props }, ref) => {
    const { content } = heroVariants();
    return <div ref={ref} className={content({ className })} {...props} />;
  }
);

HeroContent.displayName = "HeroContent";

export type HeroOverlayProps = React.ComponentProps<"div">;

const HeroOverlay = React.forwardRef<HTMLDivElement, HeroOverlayProps>(
  ({ className, ...props }, ref) => {
    const { overlay } = heroVariants();
    return <div ref={ref} className={overlay({ className })} {...props} />;
  }
);

HeroOverlay.displayName = "HeroOverlay";

const HeroComponent = Object.assign(Hero, {
  Content: HeroContent,
  Overlay: HeroOverlay,
});

export { HeroComponent as Hero };
