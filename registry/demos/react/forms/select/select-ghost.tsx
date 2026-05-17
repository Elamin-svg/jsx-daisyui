import Select from "@registry/components/react/forms/select";

export function SelectGhost() {
  return (
    <Select ghost defaultValue="Pick a font">
      <option disabled value="Pick a font">Pick a font</option>
      <option>Inter</option>
      <option>Poppins</option>
      <option>Raleway</option>
    </Select>
  );
}
