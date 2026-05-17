import * as React from "react";
import { tv } from "tailwind-variants";

const listVariants = tv({
  slots: {
    root: "list bg-base-100 rounded-box shadow-md",
    row: "list-row",
    colGrow: "list-col-grow",
    colWrap: "list-col-wrap",
    label: "p-4 pb-2 text-xs opacity-60 tracking-wide",
  },
});

export type ListProps = Omit<React.ComponentProps<"ul">, "color">;

const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, ...props }, ref) => {
    const { root } = listVariants();
    return <ul ref={ref} className={root({ className })} {...props} />;
  }
);

List.displayName = "List";

export type ListRowProps = Omit<React.ComponentProps<"li">, "color">;

const ListRow = React.forwardRef<HTMLLIElement, ListRowProps>(
  ({ className, ...props }, ref) => {
    const { row } = listVariants();
    return <li ref={ref} className={row({ className })} {...props} />;
  }
);

ListRow.displayName = "ListRow";

export type ListColGrowProps = Omit<React.ComponentProps<"div">, "color">;

const ListColGrow = React.forwardRef<HTMLDivElement, ListColGrowProps>(
  ({ className, ...props }, ref) => {
    const { colGrow } = listVariants();
    return <div ref={ref} className={colGrow({ className })} {...props} />;
  }
);

ListColGrow.displayName = "ListColGrow";

export type ListColWrapProps = Omit<React.ComponentProps<"div">, "color">;

const ListColWrap = React.forwardRef<HTMLDivElement, ListColWrapProps>(
  ({ className, ...props }, ref) => {
    const { colWrap } = listVariants();
    return <div ref={ref} className={colWrap({ className })} {...props} />;
  }
);

ListColWrap.displayName = "ListColWrap";

export type ListLabelProps = Omit<React.ComponentProps<"li">, "color">;

const ListLabel = React.forwardRef<HTMLLIElement, ListLabelProps>(
  ({ className, ...props }, ref) => {
    const { label } = listVariants();
    return <li ref={ref} className={label({ className })} {...props} />;
  }
);

ListLabel.displayName = "ListLabel";

const ListComponent = Object.assign(List, {
  Row: ListRow,
  ColGrow: ListColGrow,
  ColWrap: ListColWrap,
  Label: ListLabel,
});

export { ListComponent as List };
