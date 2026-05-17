import { Fieldset } from "@registry/components/react/forms/fieldset";
import { Label } from "@registry/components/react/forms/label";
import { Input } from "@registry/components/react/forms/input";

export function FieldsetMultiple() {
  return (
    <Fieldset className="w-xs bg-base-200 border border-base-300 p-4 rounded-box space-y-3">
      <Fieldset.Legend>Page details</Fieldset.Legend>
      <div>
        <Label>Title</Label>
        <Input placeholder="My awesome page" />
      </div>
      <div>
        <Label>Slug</Label>
        <Input placeholder="my-awesome-page" />
      </div>
      <div>
        <Label>Author</Label>
        <Input placeholder="Name" />
      </div>
    </Fieldset>
  );
}
