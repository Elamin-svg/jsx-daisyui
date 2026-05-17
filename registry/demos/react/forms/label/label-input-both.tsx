import { Label } from "@registry/components/react/forms/label";

export function LabelInputBoth() {
  return (
    <Label.InputField>
      <Label.Prefix>$</Label.Prefix>
      <input type="number" placeholder="0.00" />
      <Label.Suffix>USD</Label.Suffix>
    </Label.InputField>
  );
}
