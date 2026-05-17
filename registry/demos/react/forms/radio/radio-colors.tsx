import { Radio } from "@registry/components/react/forms/radio";

export function RadioColors() {
  return (
    <div className="flex flex-wrap gap-2">
      <Radio name="radio-neutral"   color="neutral"   defaultChecked />
      <Radio name="radio-primary"   color="primary"   defaultChecked />
      <Radio name="radio-secondary" color="secondary" defaultChecked />
      <Radio name="radio-accent"    color="accent"    defaultChecked />
      <Radio name="radio-success"   color="success"   defaultChecked />
      <Radio name="radio-warning"   color="warning"   defaultChecked />
      <Radio name="radio-info"      color="info"      defaultChecked />
      <Radio name="radio-error"     color="error"     defaultChecked />
    </div>
  );
}
