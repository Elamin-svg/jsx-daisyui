// scripts/effects/create-hover-gallery-demos.mjs
// Run: node scripts/effects/create-hover-gallery-demos.mjs

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
  "registry/demos/react/effects/hover-gallery/hover-gallery-default.tsx",
  `import HoverGallery from "@registry/components/react/effects/hover-gallery";

const images = [
  { src: "https://picsum.photos/seed/a/200/200", alt: "Photo 1" },
  { src: "https://picsum.photos/seed/b/200/200", alt: "Photo 2" },
  { src: "https://picsum.photos/seed/c/200/200", alt: "Photo 3" },
  { src: "https://picsum.photos/seed/d/200/200", alt: "Photo 4" },
  { src: "https://picsum.photos/seed/e/200/200", alt: "Photo 5" },
];

export function HoverGalleryDefault() {
  return <HoverGallery images={images} />;
}
`,
);

write(
  "registry/demos/react/effects/hover-gallery/hover-gallery-wide.tsx",
  `import HoverGallery from "@registry/components/react/effects/hover-gallery";

const images = [
  { src: "https://picsum.photos/seed/f/200/200", alt: "Photo 1" },
  { src: "https://picsum.photos/seed/g/200/200", alt: "Photo 2" },
  { src: "https://picsum.photos/seed/h/200/200", alt: "Photo 3" },
  { src: "https://picsum.photos/seed/i/200/200", alt: "Photo 4" },
  { src: "https://picsum.photos/seed/j/200/200", alt: "Photo 5" },
  { src: "https://picsum.photos/seed/k/200/200", alt: "Photo 6" },
];

export function HoverGalleryWide() {
  return <HoverGallery images={images} maxWidth="max-w-80" />;
}
`,
);

console.log("\nDone!");
