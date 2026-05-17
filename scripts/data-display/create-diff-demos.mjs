// scripts/data-display/create-diff-demos.mjs
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
  "registry/demos/react/data-display/diff/diff-default.tsx",
  `import { Diff } from "@registry/components/react/data-display/diff";

export function DiffDefault() {
  return (
    <Diff className="w-full max-w-sm">
      <Diff.Item1>
        <img alt="Before" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
      </Diff.Item1>
      <Diff.Item2>
        <img alt="After" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-bw.webp" />
      </Diff.Item2>
      <Diff.Resizer />
    </Diff>
  );
}
`,
);

write(
  "registry/demos/react/data-display/diff/diff-text.tsx",
  `import { Diff } from "@registry/components/react/data-display/diff";

export function DiffText() {
  return (
    <Diff aspect="1/1" className="w-64">
      <Diff.Item1 className="bg-base-200 text-base-content grid place-content-center text-3xl font-black">
        daisyUI
      </Diff.Item1>
      <Diff.Item2 className="bg-primary text-primary-content grid place-content-center text-3xl font-black">
        daisyUI
      </Diff.Item2>
      <Diff.Resizer />
    </Diff>
  );
}
`,
);

console.log("\nDone!");
