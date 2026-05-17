import Checkbox from "@registry/components/react/forms/checkbox";

export function CheckboxSizes() {
  return (
    <div className="flex items-center gap-4">
      <Checkbox size="xs" defaultChecked />
      <Checkbox size="sm" defaultChecked />
      <Checkbox size="md" defaultChecked />
      <Checkbox size="lg" defaultChecked />
      <Checkbox size="xl" defaultChecked />
    </div>
  );
}
