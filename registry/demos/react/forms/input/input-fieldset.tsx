import { Input } from "@registry/components/react/forms/input";
import { Fieldset } from "@registry/components/react/forms/fieldset";

export function InputFieldset() {
  return (
    <Fieldset>
      <Fieldset.Legend>Email address</Fieldset.Legend>
      <Input type="email" placeholder="user@example.com" />
      <Fieldset.Description>We'll never share your email.</Fieldset.Description>
    </Fieldset>
  );
}
