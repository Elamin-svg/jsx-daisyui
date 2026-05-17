import { Fieldset } from "@registry/components/react/forms/fieldset";
import { Label } from "@registry/components/react/forms/label";
import { Input } from "@registry/components/react/forms/input";
import Button from "@registry/components/react/forms/button";

export function FieldsetLogin() {
  return (
    <Fieldset className="w-xs bg-base-200 border border-base-300 p-4 rounded-box space-y-3">
      <Fieldset.Legend>Login</Fieldset.Legend>
      <div>
        <Label>Email</Label>
        <Input type="email" placeholder="Email" />
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" placeholder="Password" />
      </div>
      <Button color="primary" className="mt-4 w-full">Login</Button>
    </Fieldset>
  );
}
