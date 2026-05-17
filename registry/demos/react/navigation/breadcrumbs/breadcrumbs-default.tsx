import { Breadcrumbs } from "@registry/components/react/navigation/breadcrumbs";

export function BreadcrumbsDefault() {
  return (
    <Breadcrumbs>
      <Breadcrumbs.List>
        <Breadcrumbs.Item><a href="#">Home</a></Breadcrumbs.Item>
        <Breadcrumbs.Item><a href="#">Documents</a></Breadcrumbs.Item>
        <Breadcrumbs.Item>Add Document</Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
}
