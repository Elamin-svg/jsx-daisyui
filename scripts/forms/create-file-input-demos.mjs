// scripts/forms/create-file-input-demos.mjs
// Run: node scripts/forms/create-file-input-demos.mjs

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
  "registry/demos/react/forms/file-input/file-input-default.tsx",
  `import FileInput from "@registry/components/react/forms/file-input";

export function FileInputDefault() {
  return <FileInput />;
}
`,
);

write(
  "registry/demos/react/forms/file-input/file-input-sizes.tsx",
  `import FileInput from "@registry/components/react/forms/file-input";

export function FileInputSizes() {
  return (
    <div className="flex flex-col gap-3">
      <FileInput size="xs" />
      <FileInput size="sm" />
      <FileInput size="md" />
      <FileInput size="lg" />
      <FileInput size="xl" />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/file-input/file-input-colors.tsx",
  `import FileInput from "@registry/components/react/forms/file-input";

export function FileInputColors() {
  return (
    <div className="flex flex-col gap-3">
      <FileInput color="neutral" />
      <FileInput color="primary" />
      <FileInput color="secondary" />
      <FileInput color="accent" />
      <FileInput color="info" />
      <FileInput color="success" />
      <FileInput color="warning" />
      <FileInput color="error" />
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/file-input/file-input-ghost.tsx",
  `import FileInput from "@registry/components/react/forms/file-input";

export function FileInputGhost() {
  return <FileInput variant="ghost" />;
}
`,
);

write(
  "registry/demos/react/forms/file-input/file-input-disabled.tsx",
  `import FileInput from "@registry/components/react/forms/file-input";

export function FileInputDisabled() {
  return <FileInput disabled />;
}
`,
);

write(
  "registry/demos/react/forms/file-input/file-input-fieldset.tsx",
  `import FileInput from "@registry/components/react/forms/file-input";

export function FileInputFieldset() {
  return (
    <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-80">
      <legend className="fieldset-legend">Upload file</legend>
      <FileInput color="primary" />
      <p className="label text-base-content/60 text-sm mt-1">Max file size: 10MB</p>
    </fieldset>
  );
}
`,
);

console.log("\nDone!");
