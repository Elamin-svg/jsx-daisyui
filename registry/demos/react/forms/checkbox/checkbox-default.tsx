import Checkbox from "@registry/components/react/forms/checkbox";

export function CheckboxDefault() {
  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-3">
        <Checkbox defaultChecked />
        <span>Option A</span>
      </label>
      <label className="flex items-center gap-3">
        <Checkbox />
        <span>Option B</span>
      </label>
    </div>
  );
}
