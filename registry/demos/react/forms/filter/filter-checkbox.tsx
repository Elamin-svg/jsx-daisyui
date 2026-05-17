import { Filter } from "@registry/components/react/forms/filter";

export function FilterCheckbox() {
  return (
    <Filter name="tags" asForm={false}>
      <Filter.Item type="checkbox" label="TypeScript" color="primary" defaultChecked />
      <Filter.Item type="checkbox" label="React"      color="primary" defaultChecked />
      <Filter.Item type="checkbox" label="Node.js"    color="primary" />
      <Filter.Item type="checkbox" label="Docker"     color="primary" />
    </Filter>
  );
}
