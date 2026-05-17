import { Fieldset } from "@registry/components/react/forms/fieldset";
import { Input } from "@registry/components/react/forms/input";

export function FieldsetStyled() {
  return (
    <Fieldset className="w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <Fieldset.Legend>Page title</Fieldset.Legend>
      <Input placeholder="My awesome page" />
      <Fieldset.Description>You can edit page title later on from settings</Fieldset.Description>
    </Fieldset>
  );
}
