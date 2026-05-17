import Select from "@registry/components/react/forms/select";

export function SelectFieldset() {
  return (
    <fieldset className="fieldset w-xs">
      <legend className="fieldset-legend">Browsers</legend>
      <Select defaultValue="Pick a browser">
        <option disabled value="Pick a browser">Pick a browser</option>
        <option>Chrome</option>
        <option>Firefox</option>
        <option>Safari</option>
      </Select>
      <span className="label">Optional</span>
    </fieldset>
  );
}
