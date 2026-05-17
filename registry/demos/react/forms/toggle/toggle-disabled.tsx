import Toggle from "@registry/components/react/forms/toggle";

export function ToggleDisabled() {
  return (
    <div className="flex items-center gap-4">
      <Toggle disabled />
      <Toggle disabled defaultChecked />
    </div>
  );
}
