import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const footerVariants = tv({
  slots: {
    root: "footer",
    nav: "",
    title: "footer-title",
    aside: "",
  },
  variants: {
    center: {
      true: { root: "footer-center" },
    },
    horizontal: {
      true: { root: "footer-horizontal" },
    },
  },
});

type FooterVariants = VariantProps<typeof footerVariants>;

export type FooterProps = Omit<React.ComponentProps<"footer">, "center"> &
  Pick<FooterVariants, "center" | "horizontal">;

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ center, horizontal, className, ...props }, ref) => {
    const { root } = footerVariants({ center, horizontal });
    return <footer ref={ref} className={root({ className })} {...props} />;
  }
);

Footer.displayName = "Footer";

export type FooterNavProps = React.ComponentProps<"nav">;

const FooterNav = React.forwardRef<HTMLElement, FooterNavProps>(
  ({ className, ...props }, ref) => {
    const { nav } = footerVariants();
    return <nav ref={ref} className={nav({ className })} {...props} />;
  }
);

FooterNav.displayName = "FooterNav";

export type FooterTitleProps = React.ComponentProps<"h6">;

const FooterTitle = React.forwardRef<HTMLHeadingElement, FooterTitleProps>(
  ({ className, ...props }, ref) => {
    const { title } = footerVariants();
    return <h6 ref={ref} className={title({ className })} {...props} />;
  }
);

FooterTitle.displayName = "FooterTitle";

export type FooterAsideProps = React.ComponentProps<"aside">;

const FooterAside = React.forwardRef<HTMLElement, FooterAsideProps>(
  ({ className, ...props }, ref) => {
    const { aside } = footerVariants();
    return <aside ref={ref} className={aside({ className })} {...props} />;
  }
);

FooterAside.displayName = "FooterAside";

const FooterComponent = Object.assign(Footer, {
  Nav: FooterNav,
  Title: FooterTitle,
  Aside: FooterAside,
});

export { FooterComponent as Footer };
