import { Filter } from "@registry/components/react/forms/filter";

export function FilterColors() {
  return (
    <Filter name="category">
      <Filter.Reset />
      <Filter.Item label="Primary"   color="primary"   defaultChecked />
      <Filter.Item label="Secondary" color="secondary" />
      <Filter.Item label="Accent"    color="accent"    />
      <Filter.Item label="Info"      color="info"      />
      <Filter.Item label="Success"   color="success"   />
      <Filter.Item label="Warning"   color="warning"   />
      <Filter.Item label="Error"     color="error"     />
    </Filter>
  );
}
