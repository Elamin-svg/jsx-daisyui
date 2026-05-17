import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const tableVariants = tv({
  slots: {
    wrapper: "overflow-x-auto",
    wrapperBordered: "overflow-x-auto rounded-box border border-base-content/5 bg-base-100",
    root: "table",
  },
  variants: {
    size: {
      xs: { root: "table-xs" },
      sm: { root: "table-sm" },
      md: { root: "table-md" },
      lg: { root: "table-lg" },
      xl: { root: "table-xl" },
    },
    zebra: { true: { root: "table-zebra" } },
    pinRows: { true: { root: "table-pin-rows" } },
    pinCols: { true: { root: "table-pin-cols" } },
    bordered: {
      true: { wrapper: "rounded-box border border-base-content/5 bg-base-100" },
    },
  },
  defaultVariants: {
    size: "md",
    bordered: false,
  },
});

type TableVariants = VariantProps<typeof tableVariants>;

export type TableProps = Omit<React.ComponentProps<"table">, "color"> &
  TableVariants & {
    wrapperClassName?: string;
  };

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ size, zebra, pinRows, pinCols, bordered, wrapperClassName, className, ...props }, ref) => {
    const { wrapper, root } = tableVariants({ size, zebra, pinRows, pinCols, bordered });
    return (
      <div className={wrapper({ className: wrapperClassName })}>
        <table ref={ref} className={root({ className })} {...props} />
      </div>
    );
  }
);

Table.displayName = "Table";

export default Table;
