// scripts/data-display/create-kbd-demos.mjs
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
  "registry/demos/react/data-display/kbd/kbd-default.tsx",
  `import Kbd from "@registry/components/react/data-display/kbd";

export function KbdDefault() {
  return <Kbd>K</Kbd>;
}
`,
);

write(
  "registry/demos/react/data-display/kbd/kbd-sizes.tsx",
  `import Kbd from "@registry/components/react/data-display/kbd";

export function KbdSizes() {
  return (
    <div className="flex items-center gap-2">
      <Kbd size="xs">Ctrl</Kbd>
      <Kbd size="sm">Ctrl</Kbd>
      <Kbd size="md">Ctrl</Kbd>
      <Kbd size="lg">Ctrl</Kbd>
      <Kbd size="xl">Ctrl</Kbd>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/data-display/kbd/kbd-combinations.tsx",
  `import Kbd from "@registry/components/react/data-display/kbd";

export function KbdCombinations() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-1">
        <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd>
      </div>
      <div className="flex items-center gap-1">
        <Kbd>⌘</Kbd> + <Kbd>K</Kbd>
      </div>
      <div className="flex items-center gap-1">
        <Kbd>Alt</Kbd> + <Kbd>F4</Kbd>
      </div>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/data-display/kbd/kbd-in-text.tsx",
  `import Kbd from "@registry/components/react/data-display/kbd";

export function KbdInText() {
  return (
    <p className="text-base-content">
      Press <Kbd size="sm">Ctrl</Kbd> + <Kbd size="sm">S</Kbd> to save, or{" "}
      <Kbd size="sm">⌘</Kbd> + <Kbd size="sm">Z</Kbd> to undo.
    </p>
  );
}
`,
);

console.log("\nDone!");
