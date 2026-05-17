/**
 * Reads all demo files from registry/demos/react/ and generates
 * registry/previews/react/__index__.tsx
 *
 * - component  → uses @registry imports  (runs on the docs site)
 * - source     → replaces @registry with @/components/ui  (shown to users)
 *
 * Usage:    npx tsx scripts/build-demos.mts
 * Auto-run: add "predev": "tsx scripts/build-demos.mts" to package.json
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname  = path.dirname(fileURLToPath(import.meta.url));
const ROOT       = path.resolve(__dirname, "..");
const DEMOS_ROOT = path.join(ROOT, "registry/demos/react");
const OUT_FILE   = path.join(ROOT, "registry/previews/react/__index__.tsx");

function toPascalCase(str: string): string {
  return str.split("-").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");
}

interface DemoEntry {
  name: string;
  exportName: string;
  importPath: string;
  source: string;
}

function toDisplaySource(source: string): string {
  return source.replace(/@registry\/components\/react\/[^/]+\//g, "@/components/ui/");
}

function collectDemos(dir: string, relPath = ""): DemoEntry[] {
  const entries: DemoEntry[] = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      const childRel = relPath ? `${relPath}/${item}` : item;
      entries.push(...collectDemos(full, childRel));
    } else if (item.endsWith(".tsx")) {
      const slug       = item.replace(/\.tsx$/, "");
      const exportName = toPascalCase(slug);
      const importPath = `@registry/demos/react/${relPath}/${slug}`;
      const raw        = fs.readFileSync(full, "utf-8");
      const source     = toDisplaySource(raw);
      entries.push({ name: slug, exportName, importPath, source });
    }
  }
  return entries;
}

const demos = collectDemos(DEMOS_ROOT);

const lines: string[] = [
  `// AUTO-GENERATED — do not edit by hand.`,
  `// Run: npx tsx scripts/build-demos.mts`,
  ``,
  `import React from "react";`,
  ``,
  `export type DemoEntry = {`,
  `  name: string;`,
  `  component: React.LazyExoticComponent<() => React.ReactElement>;`,
  `  source: string;`,
  `};`,
  ``,
  `export const registry: Record<string, DemoEntry> = {`,
];

for (const demo of demos) {
  const escaped = demo.source
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$\{/g, "\\${");
  lines.push(`  "${demo.name}": {`);
  lines.push(`    name: "${demo.name}",`);
  lines.push(`    component: React.lazy(() =>`);
  lines.push(`      import("${demo.importPath}").then((m) => ({ default: m.${demo.exportName} }))`);
  lines.push(`    ),`);
  lines.push(`    source: \`${escaped}\`,`);
  lines.push(`  },`);
}

lines.push(`};`);
lines.push(``);

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, lines.join("\n"), "utf-8");

console.log(`✓  Generated ${OUT_FILE.replace(ROOT + "/", "")} (${demos.length} demos)`);
demos.forEach((d) => console.log(`   • ${d.name}`));
