import { Label } from "@registry/components/react/forms/label";

export function LabelPlain() {
  return (
    <div className="space-y-1">
      <Label htmlFor="username">Username</Label>
      <input id="username" type="text" placeholder="john_doe" className="input" />
    </div>
  );
}
