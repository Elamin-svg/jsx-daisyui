// scripts/build-demos.mjs
// Run: node scripts/build-demos.mjs (from the repo root)

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DEMOS_ROOT = path.join(ROOT, "registry/demos/react");
const OUT_INDEX = path.join(ROOT, "registry/previews/react/__index__.tsx");
const OUT_SOURCES = path.join(ROOT, "registry/previews/react/__sources__.ts");

function toPascalCase(str) {
  return str
    .split("-")
    .map((part) =>
      part
        .split(/(?<=\d)(?=[a-zA-Z])|(?<=[a-zA-Z])(?=\d)/g)
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

const demos = collectDemos(DEMOS_ROOT);

// ── __index__.tsx — components only, no source strings ──────────────────────

const indexLines = [
  `// AUTO-GENERATED — do not edit by hand.`,
  `// Run: node scripts/build-demos.mjs`,
  ``,
  `import React from "react";`,
  ``,
  `export const registry = {`,
];

for (const demo of demos) {
  indexLines.push(`  "${demo.name}": {`);
  indexLines.push(`    name: "${demo.name}",`);
  indexLines.push(`    component: React.lazy(() =>`);
  indexLines.push(
    `      import("${demo.importPath}").then((m) => ({ default: m.${demo.exportName} }))`,
  );
  indexLines.push(`    ),`);
  indexLines.push(`  },`);
}

indexLines.push(`};`);
indexLines.push(``);

// ── __sources__.ts — source strings only, never imported by client code ──────

const sourcesLines = [
  `// AUTO-GENERATED — do not edit by hand.`,
  `// Run: node scripts/build-demos.mjs`,
  `// SERVER-ONLY — do not import this file from any client component.`,
  ``,
  `export const sources: Record<string, string> = {`,
];

for (const demo of demos) {
  const escaped = demo.source
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
  sourcesLines.push(`  "${demo.name}": \`${escaped}\`,`);
}

sourcesLines.push(`};`);
sourcesLines.push(``);

// ── Write both files ─────────────────────────────────────────────────────────

fs.mkdirSync(path.dirname(OUT_INDEX), { recursive: true });
fs.writeFileSync(OUT_INDEX, indexLines.join("\n"), "utf-8");
fs.writeFileSync(OUT_SOURCES, sourcesLines.join("\n"), "utf-8");

console.log(
  `✓  Generated registry/previews/react/__index__.tsx  (${demos.length} demos)`,
);
console.log(
  `✓  Generated registry/previews/react/__sources__.ts (${demos.length} demos)`,
);
