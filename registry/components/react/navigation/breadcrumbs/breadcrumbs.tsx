import * as React from "react";
import { tv } from "tailwind-variants";

const breadcrumbsVariants = tv({
  slots: {
    root: "breadcrumbs",
    item: "",
    list: "",
  },
});

export type BreadcrumbsProps = React.ComponentProps<"div">;

const BreadcrumbsRoot = React.forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ className, ...props }, ref) => {
    const { root } = breadcrumbsVariants();
    return <div ref={ref} className={root({ className })} {...props} />;
  },
);

BreadcrumbsRoot.displayName = "BreadcrumbsRoot";

export type BreadcrumbsItemProps = React.ComponentProps<"li">;

const BreadcrumbsItem = React.forwardRef<HTMLLIElement, BreadcrumbsItemProps>(
  ({ className, ...props }, ref) => {
    const { item } = breadcrumbsVariants();
    return <li ref={ref} className={item({ className })} {...props} />;
  },
);

BreadcrumbsItem.displayName = "BreadcrumbsItem";

export type BreadcrumbsListProps = React.ComponentProps<"ul">;

const BreadcrumbsList = React.forwardRef<
  HTMLUListElement,
  BreadcrumbsListProps
>(({ className, ...props }, ref) => {
  const { list } = breadcrumbsVariants();
  return <ul ref={ref} className={list({ className })} {...props} />;
});

BreadcrumbsList.displayName = "BreadcrumbsList";

const BreadcrumbsComponent = Object.assign(BreadcrumbsRoot, {
  Item: BreadcrumbsItem,
  List: BreadcrumbsList,
});

export { BreadcrumbsComponent as Breadcrumbs };
