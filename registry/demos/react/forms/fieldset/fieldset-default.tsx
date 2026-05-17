import { Fieldset } from "@registry/components/react/forms/fieldset";
import { Input } from "@registry/components/react/forms/input";

export function FieldsetDefault() {
  return (
    <Fieldset className="w-xs">
      <Fieldset.Legend>Page title</Fieldset.Legend>
      <Input placeholder="My awesome page" />
      <Fieldset.Description>You can edit page title later on from settings</Fieldset.Description>
    </Fieldset>
  );
}
