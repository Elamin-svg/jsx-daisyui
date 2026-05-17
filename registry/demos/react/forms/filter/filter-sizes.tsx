import { Filter } from "@registry/components/react/forms/filter";

export function FilterSizes() {
  return (
    <div className="flex flex-col gap-3">
      <Filter name="size-xs">
        <Filter.Reset size="xs" />
        <Filter.Item label="XS-A" size="xs" defaultChecked />
        <Filter.Item label="XS-B" size="xs" />
      </Filter>
      <Filter name="size-sm">
        <Filter.Reset size="sm" />
        <Filter.Item label="SM-A" size="sm" defaultChecked />
        <Filter.Item label="SM-B" size="sm" />
      </Filter>
      <Filter name="size-md">
        <Filter.Reset size="md" />
        <Filter.Item label="MD-A" size="md" defaultChecked />
        <Filter.Item label="MD-B" size="md" />
      </Filter>
      <Filter name="size-lg">
        <Filter.Reset size="lg" />
        <Filter.Item label="LG-A" size="lg" defaultChecked />
        <Filter.Item label="LG-B" size="lg" />
      </Filter>
    </div>
  );
}
