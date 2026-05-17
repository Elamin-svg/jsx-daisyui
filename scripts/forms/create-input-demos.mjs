// scripts/forms/create-input-demos.mjs
// Run: node scripts/forms/create-input-demos.mjs

import fs from "fs";
import path from "path";

const ROOT = process.cwd();

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

// ─── Demo files ───────────────────────────────────────────────────────────────

write(
  "registry/demos/react/forms/input/input-default.tsx",
  `import { Input } from "@registry/components/react/forms/input";

export function InputDefault() {
  return <Input type="text" placeholder="Type here..." />;
}
`,
);

write(
  "registry/demos/react/forms/input/input-sizes.tsx",
  `import { Input } from "@registry/components/react/forms/input";

export function InputSizes() {
  return (
    <div className="flex flex-col gap-3">
      <Input size="xs" placeholder="Extra small" />
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
      <Input size="xl" placeholder="Extra large" />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/input/input-colors.tsx",
  `import { Input } from "@registry/components/react/forms/input";

export function InputColors() {
  return (
    <div className="flex flex-col gap-3">
      <Input color="neutral"   placeholder="Neutral" />
      <Input color="primary"   placeholder="Primary" />
      <Input color="secondary" placeholder="Secondary" />
      <Input color="accent"    placeholder="Accent" />
      <Input color="info"      placeholder="Info" />
      <Input color="success"   placeholder="Success" />
      <Input color="warning"   placeholder="Warning" />
      <Input color="error"     placeholder="Error" />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/input/input-ghost.tsx",
  `import { Input } from "@registry/components/react/forms/input";

export function InputGhost() {
  return <Input ghost placeholder="Ghost input..." />;
}
`,
);

write(
  "registry/demos/react/forms/input/input-fieldset.tsx",
  `import { Input } from "@registry/components/react/forms/input";
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
`,
);

write(
  "registry/demos/react/forms/input/input-wrapper.tsx",
  `import { Label } from "@registry/components/react/forms/label";

export function InputWrapper() {
  return (
    <div className="flex flex-col gap-3 w-72">
      <Label.InputField className="input-primary">
        <Label.Prefix>https://</Label.Prefix>
        <input type="text" className="grow" placeholder="domain.com" />
      </Label.InputField>
      <Label.InputField>
        <Label.Prefix>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
        </Label.Prefix>
        <input type="email" className="grow" placeholder="Email" />
      </Label.InputField>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/input/input-floating-label.tsx",
  `import { Input } from "@registry/components/react/forms/input";
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
`,
);

write(
  "registry/demos/react/forms/input/input-disabled.tsx",
  `import { Input } from "@registry/components/react/forms/input";

export function InputDisabled() {
  return (
    <div className="flex flex-col gap-3 w-72">
      <Input disabled placeholder="Disabled input" />
      <Input disabled value="Read-only value" readOnly />
    </div>
  );
}
`,
);

console.log("\nDone!");
