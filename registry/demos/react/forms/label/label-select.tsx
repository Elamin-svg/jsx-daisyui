import { Label } from "@registry/components/react/forms/label";

export function LabelSelect() {
  return (
    <Label.SelectField label="Type">
      <select>
        <option>Personal</option>
        <option>Business</option>
      </select>
    </Label.SelectField>
  );
}
