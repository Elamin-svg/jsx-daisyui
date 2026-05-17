import { Radio } from "@registry/components/react/forms/radio";

export function RadioSizes() {
  return (
    <div className="flex items-center gap-2">
      <Radio name="radio-xs" size="xs" defaultChecked />
      <Radio name="radio-sm" size="sm" defaultChecked />
      <Radio name="radio-md" size="md" defaultChecked />
      <Radio name="radio-lg" size="lg" defaultChecked />
      <Radio name="radio-xl" size="xl" defaultChecked />
    </div>
  );
}
