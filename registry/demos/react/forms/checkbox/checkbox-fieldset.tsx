import Checkbox from "@registry/components/react/forms/checkbox";

export function CheckboxFieldset() {
  return (
    <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-64">
      <legend className="fieldset-legend">Preferences</legend>
      <label className="label">
        <Checkbox defaultChecked />
        Email notifications
      </label>
      <label className="label">
        <Checkbox />
        SMS notifications
      </label>
      <label className="label">
        <Checkbox defaultChecked />
        Push notifications
      </label>
    </fieldset>
  );
}
