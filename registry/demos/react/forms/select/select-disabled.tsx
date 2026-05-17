import Select from "@registry/components/react/forms/select";

export function SelectDisabled() {
  return (
    <Select disabled defaultValue="disabled">
      <option value="disabled">You can't touch this</option>
    </Select>
  );
}
