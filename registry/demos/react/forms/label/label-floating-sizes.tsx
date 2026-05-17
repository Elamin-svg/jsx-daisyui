import { Label } from "@registry/components/react/forms/label";

export function LabelFloatingSizes() {
  return (
    <div className="space-y-4 w-xs">
      <Label.FloatingLabel label="Extra Small">
        <input type="text" placeholder="Extra Small" className="input input-xs" />
      </Label.FloatingLabel>
      <Label.FloatingLabel label="Small">
        <input type="text" placeholder="Small" className="input input-sm" />
      </Label.FloatingLabel>
      <Label.FloatingLabel label="Medium">
        <input type="text" placeholder="Medium" className="input input-md" />
      </Label.FloatingLabel>
      <Label.FloatingLabel label="Large">
        <input type="text" placeholder="Large" className="input input-lg" />
      </Label.FloatingLabel>
      <Label.FloatingLabel label="Extra Large">
        <input type="text" placeholder="Extra Large" className="input input-xl" />
      </Label.FloatingLabel>
    </div>
  );
}
