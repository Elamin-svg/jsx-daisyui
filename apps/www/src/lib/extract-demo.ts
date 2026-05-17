/**
 * Extracts a demo function's source from a raw file string using
 * comment delimiters. Wrap each function like this:
 *
 *   // [DemoName]
 *   export function DemoName() { ... }
 *   // [/DemoName]
 *
 * Requires in next.config.ts:
 *   webpack: (config) => {
 *     config.module.rules.push({ resourceQuery: /raw/, type: "asset/source" })
 *     return config
 *   }
 *
 * Requires in src/types/raw.d.ts:
 *   declare module "*?raw" {
 *     const content: string
 *     export default content
 *   }
 */
export function extractDemo(raw: string | undefined, name: string): string {
  if (!raw) {
    console.warn(
      `[extractDemo] raw is undefined for "${name}". ` +
        `Check that the ?raw webpack rule is configured in next.config.ts ` +
        `and that src/types/raw.d.ts exists.`,
    );
    return "";
  }

  const open = `// [${name}]`;
  const close = `// [/${name}]`;

  const start = raw.indexOf(open);
  const end = raw.indexOf(close);

  if (start === -1 || end === -1) {
    console.warn(
      `[extractDemo] Markers for "${name}" not found in raw source.`,
    );
    return "";
  }

  const contentStart = raw.indexOf("\n", start) + 1;
  console.log({ contentStart, end });
  return raw.slice(contentStart, end).trimEnd();
}
