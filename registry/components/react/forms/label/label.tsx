"use client";

import * as React from "react";
import { tv } from "tailwind-variants";

const labelVariants = tv({
  slots: {
    root: "label",
    inputField: "input",
    selectField: "select",
    floatingLabel: "floating-label",
    labelText: "label",
  },
});

export type LabelProps = React.ComponentProps<"label">;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    const { root } = labelVariants();
    return <label ref={ref} className={root({ className })} {...props} />;
  },
);

Label.displayName = "Label";

export type PrefixProps = React.ComponentProps<"span">;

const Prefix = React.forwardRef<HTMLSpanElement, PrefixProps>(
  (props, ref) => <span ref={ref} {...props} />,
);

Prefix.displayName = "Prefix";

export type SuffixProps = React.ComponentProps<"span">;

const Suffix = React.forwardRef<HTMLSpanElement, SuffixProps>(
  (props, ref) => <span ref={ref} {...props} />,
);

Suffix.displayName = "Suffix";

export type InputFieldProps = React.ComponentProps<"label">;

const InputField = React.forwardRef<HTMLLabelElement, InputFieldProps>(
  ({ className, children, ...props }, ref) => {
    const { inputField } = labelVariants();
    return (
      <label ref={ref} className={inputField({ className })} {...props}>
        {children}
      </label>
    );
  },
);

InputField.displayName = "InputField";

export type SelectFieldProps = React.ComponentProps<"label"> & {
  label?: React.ReactNode;
};

const SelectField = React.forwardRef<HTMLLabelElement, SelectFieldProps>(
  ({ className, label, children, ...props }, ref) => {
    const { selectField, labelText } = labelVariants();
    return (
      <label ref={ref} className={selectField({ className })} {...props}>
        {label != null && <span className={labelText()}>{label}</span>}
        {children}
      </label>
    );
  },
);

SelectField.displayName = "SelectField";

export type FloatingLabelProps = React.ComponentProps<"label"> & {
  label: string;
};

const FloatingLabel = React.forwardRef<HTMLLabelElement, FloatingLabelProps>(
  ({ className, label, children, ...props }, ref) => {
    const { floatingLabel } = labelVariants();
    return (
      <label ref={ref} className={floatingLabel({ className })} {...props}>
        {children}
        <span>{label}</span>
      </label>
    );
  },
);

FloatingLabel.displayName = "FloatingLabel";

const LabelComponent = Object.assign(Label, {
  InputField,
  SelectField,
  FloatingLabel,
  Prefix,
  Suffix,
});

export { LabelComponent as Label };
