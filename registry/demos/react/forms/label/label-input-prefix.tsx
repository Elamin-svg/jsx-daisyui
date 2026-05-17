import { Label } from "@registry/components/react/forms/label";

export function LabelInputPrefix() {
  return (
    <Label.InputField>
      <Label.Prefix>https://</Label.Prefix>
      <input type="text" placeholder="URL" />
    </Label.InputField>
  );
}
