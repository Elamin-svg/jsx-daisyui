import Select from "@registry/components/react/forms/select";

export function SelectSizes() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <Select size="xs" defaultValue="xs">
        <option disabled value="xs">Extra Small</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
      <Select size="sm" defaultValue="sm">
        <option disabled value="sm">Small</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
      <Select size="md" defaultValue="md">
        <option disabled value="md">Medium</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
      <Select size="lg" defaultValue="lg">
        <option disabled value="lg">Large</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
      <Select size="xl" defaultValue="xl">
        <option disabled value="xl">Extra Large</option>
        <option>Apple</option>
        <option>Orange</option>
      </Select>
    </div>
  );
}
