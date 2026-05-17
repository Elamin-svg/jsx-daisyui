// scripts/forms/create-label-demos.mjs
import fs from "fs";
import path from "path";

const ROOT = process.cwd();

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

// ─── InputField: prefix ───────────────────────────────────────────────────────

write(
  "registry/demos/react/forms/label/label-input-prefix.tsx",
  `import { Label } from "@registry/components/react/forms/label";

export function LabelInputPrefix() {
  return (
    <Label.InputField>
      <Label.Prefix>https://</Label.Prefix>
      <input type="text" placeholder="URL" />
    </Label.InputField>
  );
}
`,
);

// ─── InputField: suffix ───────────────────────────────────────────────────────

write(
  "registry/demos/react/forms/label/label-input-suffix.tsx",
  `import { Label } from "@registry/components/react/forms/label";

export function LabelInputSuffix() {
  return (
    <Label.InputField>
      <input type="text" placeholder="domain name" />
      <Label.Suffix>.com</Label.Suffix>
    </Label.InputField>
  );
}
`,
);

// ─── InputField: prefix + suffix ─────────────────────────────────────────────

write(
  "registry/demos/react/forms/label/label-input-both.tsx",
  `import { Label } from "@registry/components/react/forms/label";

export function LabelInputBoth() {
  return (
    <Label.InputField>
      <Label.Prefix>$</Label.Prefix>
      <input type="number" placeholder="0.00" />
      <Label.Suffix>USD</Label.Suffix>
    </Label.InputField>
  );
}
`,
);

// ─── SelectField ──────────────────────────────────────────────────────────────

write(
  "registry/demos/react/forms/label/label-select.tsx",
  `import { Label } from "@registry/components/react/forms/label";

export function LabelSelect() {
  return (
    <Label.SelectField label="Type">
      <select>
        <option>Personal</option>
        <option>Business</option>
      </select>
    </Label.SelectField>
  );
}
`,
);

// ─── FloatingLabel ────────────────────────────────────────────────────────────

write(
  "registry/demos/react/forms/label/label-floating.tsx",
  `import { Label } from "@registry/components/react/forms/label";

export function LabelFloating() {
  return (
    <Label.FloatingLabel label="Your Email" className="w-full max-w-xs">
      <input type="email" placeholder="mail@site.com" className="input input-md" />
    </Label.FloatingLabel>
  );
}
`,
);

// ─── FloatingLabel: sizes ─────────────────────────────────────────────────────

write(
  "registry/demos/react/forms/label/label-floating-sizes.tsx",
  `import { Label } from "@registry/components/react/forms/label";

export function LabelFloatingSizes() {
  return (
    <div className="space-y-4 w-xs">
      <Label.FloatingLabel label="Extra Small">
        <input type="text" placeholder="Extra Small" className="input input-xs" />
      </Label.FloatingLabel>
      <Label.FloatingLabel label="Small">
        <input type="text" placeholder="Small" className="input input-sm" />
      </Label.FloatingLabel>
      <Label.FloatingLabel label="Medium">
        <input type="text" placeholder="Medium" className="input input-md" />
      </Label.FloatingLabel>
      <Label.FloatingLabel label="Large">
        <input type="text" placeholder="Large" className="input input-lg" />
      </Label.FloatingLabel>
      <Label.FloatingLabel label="Extra Large">
        <input type="text" placeholder="Extra Large" className="input input-xl" />
      </Label.FloatingLabel>
    </div>
  );
}
`,
);

// ─── Label: plain (semantic, with htmlFor) ────────────────────────────────────

write(
  "registry/demos/react/forms/label/label-plain.tsx",
  `import { Label } from "@registry/components/react/forms/label";

export function LabelPlain() {
  return (
    <div className="space-y-1">
      <Label htmlFor="username">Username</Label>
      <input id="username" type="text" placeholder="john_doe" className="input" />
    </div>
  );
}
`,
);

console.log("\nDone!");
