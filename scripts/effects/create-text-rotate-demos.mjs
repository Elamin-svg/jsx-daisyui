// scripts/effects/create-text-rotate-demos.mjs
// Run: node scripts/effects/create-text-rotate-demos.mjs

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
  "registry/demos/react/effects/text-rotate/text-rotate-default.tsx",
  `import { TextRotate } from "@registry/components/react/effects/text-rotate";

export function TextRotateDefault() {
  return (
    <TextRotate>
      <TextRotate.List>
        <TextRotate.Item>React</TextRotate.Item>
        <TextRotate.Item>Vue</TextRotate.Item>
        <TextRotate.Item>Svelte</TextRotate.Item>
        <TextRotate.Item>Angular</TextRotate.Item>
      </TextRotate.List>
    </TextRotate>
  );
}
`,
);

write(
  "registry/demos/react/effects/text-rotate/text-rotate-inline.tsx",
  `import { TextRotate } from "@registry/components/react/effects/text-rotate";

export function TextRotateInline() {
  return (
    <h2 className="text-3xl font-bold text-center">
      Build with{" "}
      <TextRotate className="text-primary">
        <TextRotate.List>
          <TextRotate.Item>speed</TextRotate.Item>
          <TextRotate.Item>style</TextRotate.Item>
          <TextRotate.Item>confidence</TextRotate.Item>
          <TextRotate.Item>daisyUI</TextRotate.Item>
        </TextRotate.List>
      </TextRotate>
    </h2>
  );
}
`,
);

write(
  "registry/demos/react/effects/text-rotate/text-rotate-centered.tsx",
  `import { TextRotate } from "@registry/components/react/effects/text-rotate";

export function TextRotateCentered() {
  return (
    <div className="text-center">
      <p className="text-base-content/60 text-sm mb-1">Currently showing</p>
      <TextRotate centered className="text-2xl font-semibold text-secondary">
        <TextRotate.List>
          <TextRotate.Item>Tailwind CSS</TextRotate.Item>
          <TextRotate.Item>DaisyUI</TextRotate.Item>
          <TextRotate.Item>React</TextRotate.Item>
        </TextRotate.List>
      </TextRotate>
    </div>
  );
}
`,
);

console.log("\nDone!");
