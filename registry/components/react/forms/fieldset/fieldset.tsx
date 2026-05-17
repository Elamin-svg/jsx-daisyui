import * as React from "react";
import { tv } from "tailwind-variants";

const fieldsetVariants = tv({
  slots: {
    root: "fieldset",
    legend: "fieldset-legend",
    description: "label",
  },
});

export type FieldsetProps = Omit<React.ComponentProps<"fieldset">, "color">;

const Fieldset = React.forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ className, ...props }, ref) => {
    const { root } = fieldsetVariants();
    return <fieldset ref={ref} className={root({ className })} {...props} />;
  }
);

Fieldset.displayName = "Fieldset";

export type FieldsetLegendProps = Omit<React.ComponentProps<"legend">, "color">;

const FieldsetLegend = React.forwardRef<HTMLLegendElement, FieldsetLegendProps>(
  ({ className, ...props }, ref) => {
    const { legend } = fieldsetVariants();
    return <legend ref={ref} className={legend({ className })} {...props} />;
  }
);

FieldsetLegend.displayName = "FieldsetLegend";

export type FieldsetDescriptionProps = Omit<React.ComponentProps<"p">, "color">;

const FieldsetDescription = React.forwardRef<HTMLParagraphElement, FieldsetDescriptionProps>(
  ({ className, ...props }, ref) => {
    const { description } = fieldsetVariants();
    return <p ref={ref} className={description({ className })} {...props} />;
  }
);

FieldsetDescription.displayName = "FieldsetDescription";

const FieldsetComponent = Object.assign(Fieldset, {
  Legend: FieldsetLegend,
  Description: FieldsetDescription,
});

export { FieldsetComponent as Fieldset };
