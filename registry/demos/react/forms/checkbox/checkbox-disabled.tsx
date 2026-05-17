import Checkbox from "@registry/components/react/forms/checkbox";

export function CheckboxDisabled() {
  return (
    <div className="flex items-center gap-4">
      <Checkbox disabled />
      <Checkbox disabled defaultChecked />
    </div>
  );
}
