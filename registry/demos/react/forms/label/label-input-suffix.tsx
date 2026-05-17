import { Label } from "@registry/components/react/forms/label";

export function LabelInputSuffix() {
  return (
    <Label.InputField>
      <input type="text" placeholder="domain name" />
      <Label.Suffix>.com</Label.Suffix>
    </Label.InputField>
  );
}
