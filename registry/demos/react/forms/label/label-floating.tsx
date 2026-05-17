import { Label } from "@registry/components/react/forms/label";

export function LabelFloating() {
  return (
    <Label.FloatingLabel label="Your Email" className="w-full max-w-xs">
      <input type="email" placeholder="mail@site.com" className="input input-md" />
    </Label.FloatingLabel>
  );
}
