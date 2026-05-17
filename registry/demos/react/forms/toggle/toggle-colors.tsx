import Toggle from "@registry/components/react/forms/toggle";

export function ToggleColors() {
  return (
    <div className="flex flex-wrap gap-3">
      <Toggle color="neutral"   defaultChecked />
      <Toggle color="primary"   defaultChecked />
      <Toggle color="secondary" defaultChecked />
      <Toggle color="accent"    defaultChecked />
      <Toggle color="info"      defaultChecked />
      <Toggle color="success"   defaultChecked />
      <Toggle color="warning"   defaultChecked />
      <Toggle color="error"     defaultChecked />
    </div>
  );
}
