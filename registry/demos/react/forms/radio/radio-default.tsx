import { Radio } from "@registry/components/react/forms/radio";

export function RadioDefault() {
  return (
    <div className="flex gap-2">
      <Radio name="radio-default" defaultChecked />
      <Radio name="radio-default" />
    </div>
  );
}
