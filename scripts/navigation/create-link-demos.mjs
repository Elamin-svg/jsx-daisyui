// scripts/navigation/create-link-demos.mjs
// Run: node scripts/navigation/create-link-demos.mjs

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
  "registry/demos/react/navigation/link/link-default.tsx",
  `import Link from "@registry/components/react/navigation/link";

export function LinkDefault() {
  return <Link href="#">Click me</Link>;
}
`,
);

write(
  "registry/demos/react/navigation/link/link-in-text.tsx",
  `import Link from "@registry/components/react/navigation/link";

export function LinkInText() {
  return (
    <p>
      Tailwind CSS resets the style of links by default.
      <br />
      Add the <code>link</code> class to make it look like a{" "}
      <Link href="#">normal link</Link> again.
    </p>
  );
}
`,
);

write(
  "registry/demos/react/navigation/link/link-colors.tsx",
  `import Link from "@registry/components/react/navigation/link";

export function LinkColors() {
  return (
    <div className="flex flex-wrap gap-4">
      <Link href="#" color="neutral">Neutral</Link>
      <Link href="#" color="primary">Primary</Link>
      <Link href="#" color="secondary">Secondary</Link>
      <Link href="#" color="accent">Accent</Link>
      <Link href="#" color="info">Info</Link>
      <Link href="#" color="success">Success</Link>
      <Link href="#" color="warning">Warning</Link>
      <Link href="#" color="error">Error</Link>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/navigation/link/link-hover.tsx",
  `import Link from "@registry/components/react/navigation/link";

export function LinkHover() {
  return (
    <Link href="#" variant="hover">Show underline only on hover</Link>
  );
}
`,
);

console.log("\nDone!");
