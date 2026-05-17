import { Fieldset } from "@registry/components/react/forms/fieldset";
import Join from "@registry/components/react/layout/join";
import { Input } from "@registry/components/react/forms/input";
import Button from "@registry/components/react/forms/button";

export function FieldsetJoin() {
  return (
    <Fieldset className="w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <Fieldset.Legend>Settings</Fieldset.Legend>
      <Join>
          <Input aria-label="Product name" className="join-item" placeholder="Product name" />
          <Button color="primary" className="join-item">
            Save
          </Button>
      </Join>
    </Fieldset>
  );
}

