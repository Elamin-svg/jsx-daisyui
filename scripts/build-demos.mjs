// scripts/build-demos.mjs
// Run: node scripts/build-demos.mjs (from the repo root)

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DEMOS_ROOT = path.join(ROOT, "registry/demos/react");
const OUT_FILE = path.join(ROOT, "registry/previews/react/__index__.tsx");

function toPascalCase(str) {
  return str
    .split("-")
    .map((part) =>
      part
        .split(/(?<=\d)(?=[a-zA-Z])|(?<=[a-zA-Z])(?=\d)/g) // trennt 3d sauber
        .map((word) =>
          word.toUpperCase() === word
            ? word
            : word.charAt(0).toUpperCase() + word.slice(1),
        )
        .join(""),
    )
    .join("");
}

function toDisplaySource(source) {
  return source.replace(
    /@registry\/components\/react\/[^/]+\//g,
    "@/components/ui/",
  );
}

// Collect all demo files

function collectDemos(dir, relPath = "") {
  const entries = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      const childRel = relPath ? `${relPath}/${item}` : item;
      entries.push(...collectDemos(full, childRel));
    } else if (item.endsWith(".tsx")) {
      const slug = item.replace(/\.tsx$/, "");
      const exportName = toPascalCase(slug);
      const importPath = `@registry/demos/react/${relPath}/${slug}`;
      const raw = fs.readFileSync(full, "utf-8");
      const source = toDisplaySource(raw);
      entries.push({ name: slug, exportName, importPath, source });
    }
  }
  return entries;
}

// Generate __index__.tsx

const demos = collectDemos(DEMOS_ROOT);

const lines = [
  `// AUTO-GENERATED — do not edit by hand.`,
  `// Run: node scripts/build-demos.mjs`,
  ``,
  `import React from "react";`,
  ``,
  `export const registry = {`,
];

for (const demo of demos) {
  const escaped = demo.source
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");

  lines.push(`  "${demo.name}": {`);
  lines.push(`    name: "${demo.name}",`);
  lines.push(`    component: React.lazy(() =>`);
  lines.push(
    `      import("${demo.importPath}").then((m) => ({ default: m.${demo.exportName} }))`,
  );
  lines.push(`    ),`);
  lines.push(`    source: \`${escaped}\`,`);
  lines.push(`  },`);
}

lines.push(`};`);
lines.push(``);

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, lines.join("\n"), "utf-8");

console.log(
  `✓  Generated registry/previews/react/__index__.tsx (${demos.length} demos)`,
);
demos.forEach((d) => console.log(`   • ${d.name}`));
