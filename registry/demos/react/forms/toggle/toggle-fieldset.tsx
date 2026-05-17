import Toggle from "@registry/components/react/forms/toggle";
import {Label} from "@registry/components/react/forms/label";

export function ToggleFieldset() {
  return (
    <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
      <legend className="fieldset-legend">Login options</legend>
      <Label className="flex items-center gap-2">
        <Toggle defaultChecked />
        Remember me
      </Label>
    </fieldset>
  );
}
