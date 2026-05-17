import Select from "@registry/components/react/forms/select";

export function SelectNative() {
  return (
    <Select className="appearance-none" defaultValue="Pick a color">
      <option disabled value="Pick a color">Pick a color</option>
      <option>Crimson</option>
      <option>Amber</option>
      <option>Velvet</option>
    </Select>
  );
}
