import Checkbox from "@registry/components/react/forms/checkbox";

export function CheckboxColors() {
  return (
    <div className="flex flex-wrap gap-3">
      <Checkbox color="neutral"   defaultChecked />
      <Checkbox color="primary"   defaultChecked />
      <Checkbox color="secondary" defaultChecked />
      <Checkbox color="accent"    defaultChecked />
      <Checkbox color="info"      defaultChecked />
      <Checkbox color="success"   defaultChecked />
      <Checkbox color="warning"   defaultChecked />
      <Checkbox color="error"     defaultChecked />
    </div>
  );
}
