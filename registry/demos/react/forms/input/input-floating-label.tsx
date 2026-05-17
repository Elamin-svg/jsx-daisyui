import { Input } from "@registry/components/react/forms/input";
import { Label } from "@registry/components/react/forms/label";

export function InputFloatingLabel() {
  return (
    <div className="flex flex-col gap-4 w-72">
      <Label.FloatingLabel label="Your name">
        <Input type="text" className="input input-md w-full" placeholder=" " />
      </Label.FloatingLabel>
      <Label.FloatingLabel label="Email address">
        <Input type="email" className="input input-md w-full" placeholder=" " />
      </Label.FloatingLabel>
    </div>
  );
}
