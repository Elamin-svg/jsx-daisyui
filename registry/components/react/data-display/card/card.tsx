import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const cardVariants = tv({
  slots: {
    root: "card bg-base-100",
    body: "card-body",
    title: "card-title",
    actions: "card-actions",
    figure: "",
  },
  variants: {
    size: {
      xs: { root: "card-xs" },
      sm: { root: "card-sm" },
      md: { root: "card-md" },
      lg: { root: "card-lg" },
      xl: { root: "card-xl" },
    },
    variant: {
      shadow: { root: "shadow-sm" },
      border: { root: "card-border" },
      dash: { root: "card-dash" },
    },
    side: { true: { root: "card-side" } },
    imageFull: { true: { root: "image-full" } },
    centered: { true: { body: "items-center text-center" } },
    justify: {
      start: { actions: "justify-start" },
      center: { actions: "justify-center" },
      end: { actions: "justify-end" },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "shadow",
    justify: "end",
  },
});

type CardVariants = VariantProps<typeof cardVariants>;

export type CardProps = Omit<React.ComponentProps<"div">, "color"> & CardVariants;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ size, variant, side, imageFull, className, ...props }, ref) => {
    const { root } = cardVariants({ size, variant, side, imageFull });
    return <div ref={ref} className={root({ className })} {...props} />;
  }
);

Card.displayName = "Card";

export type CardBodyProps = Omit<React.ComponentProps<"div">, "color"> &
  Pick<CardVariants, "centered">;

const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ centered, className, ...props }, ref) => {
    const { body } = cardVariants({ centered });
    return <div ref={ref} className={body({ className })} {...props} />;
  }
);

CardBody.displayName = "CardBody";

export type CardTitleProps = Omit<React.ComponentProps<"h2">, "color">;

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    const { title } = cardVariants();
    return <h2 ref={ref} className={title({ className })} {...props} />;
  }
);

CardTitle.displayName = "CardTitle";

export type CardActionsProps = Omit<React.ComponentProps<"div">, "color"> &
  Pick<CardVariants, "justify">;

const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>(
  ({ justify, className, ...props }, ref) => {
    const { actions } = cardVariants({ justify });
    return <div ref={ref} className={actions({ className })} {...props} />;
  }
);

CardActions.displayName = "CardActions";

export type CardFigureProps = Omit<React.ComponentProps<"figure">, "color"> & {
  src?: string;
  alt?: string;
};

const CardFigure = React.forwardRef<HTMLElement, CardFigureProps>(
  ({ src, alt, className, children, ...props }, ref) => {
    const { figure } = cardVariants();
    return (
      <figure ref={ref} className={figure({ className })} {...props}>
        {src ? <img src={src} alt={alt ?? ""} /> : children}
      </figure>
    );
  }
);

CardFigure.displayName = "CardFigure";

const CardComponent = Object.assign(Card, {
  Body: CardBody,
  Title: CardTitle,
  Actions: CardActions,
  Figure: CardFigure,
});

export { CardComponent as Card };
