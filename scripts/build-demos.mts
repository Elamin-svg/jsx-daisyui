/**
 * Reads all demo files from registry/demos/react/ and generates:
 *   registry/previews/react/__index__.tsx   — React.lazy components (client bundle)
 *   registry/previews/react/__sources__.ts  — source strings (server-only)
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
const OUT_INDEX  = path.join(ROOT, "registry/previews/react/__index__.tsx");
const OUT_SOURCES = path.join(ROOT, "registry/previews/react/__sources__.ts");

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

// ── __index__.tsx — components only, no source strings ──────────────────────

const indexLines: string[] = [
  `// AUTO-GENERATED — do not edit by hand.`,
  `// Run: npx tsx scripts/build-demos.mts`,
  ``,
  `import React from "react";`,
  ``,
  `export type DemoEntry = {`,
  `  name: string;`,
  `  component: React.LazyExoticComponent<() => React.ReactElement>;`,
  `};`,
  ``,
  `export const registry: Record<string, DemoEntry> = {`,
];

for (const demo of demos) {
  indexLines.push(`  "${demo.name}": {`);
  indexLines.push(`    name: "${demo.name}",`);
  indexLines.push(`    component: React.lazy(() =>`);
  indexLines.push(`      import("${demo.importPath}").then((m) => ({ default: m.${demo.exportName} }))`);
  indexLines.push(`    ),`);
  indexLines.push(`  },`);
}

indexLines.push(`};`);
indexLines.push(``);

// ── __sources__.ts — source strings only, never imported by client code ─────

const sourcesLines: string[] = [
  `// AUTO-GENERATED — do not edit by hand.`,
  `// Run: npx tsx scripts/build-demos.mts`,
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

console.log(`✓  Generated registry/previews/react/__index__.tsx  (${demos.length} demos)`);
console.log(`✓  Generated registry/previews/react/__sources__.ts (${demos.length} demos)`);
