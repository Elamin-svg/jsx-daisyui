import { Filter } from "@registry/components/react/forms/filter";

export function FilterDefault() {
  return (
    <Filter name="framework">
      <Filter.Reset />
      <Filter.Item label="React" defaultChecked />
      <Filter.Item label="Vue" />
      <Filter.Item label="Svelte" />
      <Filter.Item label="Angular" />
    </Filter>
  );
}
