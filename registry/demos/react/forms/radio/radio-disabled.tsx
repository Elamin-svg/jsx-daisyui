import { Radio } from "@registry/components/react/forms/radio";

export function RadioDisabled() {
  return (
    <div className="flex gap-2">
      <Radio name="radio-disabled" defaultChecked disabled />
      <Radio name="radio-disabled" disabled />
    </div>
  );
}
