// scripts/forms/create-fieldset-demos.mjs
import fs from "fs";
import path from "path";

const ROOT = process.cwd();

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

write(
  "registry/demos/react/forms/fieldset/fieldset-default.tsx",
  `import { Fieldset } from "@registry/components/react/forms/fieldset";
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
`,
);

write(
  "registry/demos/react/forms/fieldset/fieldset-styled.tsx",
  `import { Fieldset } from "@registry/components/react/forms/fieldset";
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
`,
);

write(
  "registry/demos/react/forms/fieldset/fieldset-multiple.tsx",
  `import { Fieldset } from "@registry/components/react/forms/fieldset";
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
`,
);

write(
  "registry/demos/react/forms/fieldset/fieldset-join.tsx",
  `import { Fieldset } from "@registry/components/react/forms/fieldset";
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

`,
);

write(
  "registry/demos/react/forms/fieldset/fieldset-login.tsx",
  `import { Fieldset } from "@registry/components/react/forms/fieldset";
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
`,
);

console.log("\nDone!");
