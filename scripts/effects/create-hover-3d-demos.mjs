// scripts/effects/create-hover-3d-demos.mjs
// Run: node scripts/effects/create-hover-3d-demos.mjs

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
  "registry/demos/react/effects/hover-3d/hover-3d-default.tsx",
  `import Hover3D from "@registry/components/react/effects/hover-3d";

export function Hover3DDefault() {
  return (
    <Hover3D className=" ">
      {/* content */}
      <figure className="max-w-100 rounded-2xl">
        <img
          src="https://img.daisyui.com/images/stock/creditcard.webp"
          alt="3D card"
        />
      </figure>
    </Hover3D>
  );
}
`,
);

write(
  "registry/demos/react/effects/hover-3d/hover-3d-card.tsx",
  `import Hover3D from "@registry/components/react/effects/hover-3d";

export function Hover3DCard() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
      <Hover3D>
        {/* content */}
        <figure className="  rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/card-1.webp?x"
            alt="Tailwind CSS 3D card"
          />
        </figure>
      </Hover3D>

      <Hover3D>
        {/* content */}
        <figure className=" rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/card-2.webp?x"
            alt="Tailwind CSS 3D hover"
          />
        </figure>
      </Hover3D>

      <Hover3D>
        {/* content */}
        <figure className=" rounded-2xl">
          <img
            src="https://img.daisyui.com/images/stock/card-3.webp?x"
            alt="Tailwind CSS 3D hover"
          />
        </figure>
      </Hover3D>
    </div>
  );
}

`,
);

console.log("\nDone!");
