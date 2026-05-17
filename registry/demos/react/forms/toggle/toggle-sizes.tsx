import Toggle from "@registry/components/react/forms/toggle";

export function ToggleSizes() {
  return (
    <div className="flex items-center gap-4">
      <Toggle size="xs" defaultChecked />
      <Toggle size="sm" defaultChecked />
      <Toggle size="md" defaultChecked />
      <Toggle size="lg" defaultChecked />
      <Toggle size="xl" defaultChecked />
    </div>
  );
}
