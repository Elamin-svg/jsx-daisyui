// scripts/data-display/create-mask-demos.mjs
// Run: node scripts/data-display/create-mask-demos.mjs

import fs from "fs";
import path from "path";

const ROOT = process.cwd();

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

const IMG = "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp";

// ─── Demo files ───────────────────────────────────────────────────────────────

write(
  "registry/demos/react/data-display/mask/mask-all-shapes.tsx",
  `import  Mask, {type MaskShape } from "@registry/components/react/data-display/mask";

const SHAPES: { shape: MaskShape; label: string }[] = [
  { shape: "squircle",    label: "Squircle"    },
  { shape: "heart",       label: "Heart"       },
  { shape: "hexagon",     label: "Hexagon"     },
  { shape: "hexagon-2",   label: "Hexagon 2"   },
  { shape: "decagon",     label: "Decagon"     },
  { shape: "pentagon",    label: "Pentagon"    },
  { shape: "diamond",     label: "Diamond"     },
  { shape: "square",      label: "Square"      },
  { shape: "circle",      label: "Circle"      },
  { shape: "star",        label: "Star"        },
  { shape: "star-2",      label: "Star 2"      },
  { shape: "triangle",    label: "Triangle ↑"  },
  { shape: "triangle-2",  label: "Triangle ↓"  },
  { shape: "triangle-3",  label: "Triangle ←"  },
  { shape: "triangle-4",  label: "Triangle →"  },
];

export function MaskAllShapes() {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {SHAPES.map(({ shape, label }) => (
        <div key={shape} className="flex flex-col items-center gap-2">
          <Mask
            shape={shape}
            src="${IMG}"
            alt={label}
            className="w-16 h-16"
          />
          <span className="text-xs text-base-content/50">{label}</span>
        </div>
      ))}
    </div>
  );
}
`,
);

write(
  "registry/demos/react/data-display/mask/mask-avatar-stack.tsx",
  `import Mask from "@registry/components/react/data-display/mask";

const AVATARS = [
  "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp",
  "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
  "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
];

export function MaskAvatarStack() {
  return (
    <div className="flex flex-col gap-6 items-center">
      {/* Circle stack */}
      <div className="flex -space-x-4">
        {AVATARS.map((src, i) => (
          <Mask
            key={i}
            shape="circle"
            src={src}
            alt={\`Avatar \${i + 1}\`}
            className="w-12 h-12 border-2 border-base-100"
          />
        ))}
      </div>
      {/* Hexagon stack */}
      <div className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <Mask
            key={i}
            shape="hexagon"
            src={src}
            alt={\`Avatar \${i + 1}\`}
            className="w-12 h-12"
          />
        ))}
      </div>
      {/* Squircle stack */}
      <div className="flex -space-x-3">
        {AVATARS.map((src, i) => (
          <Mask
            key={i}
            shape="squircle"
            src={src}
            alt={\`Avatar \${i + 1}\`}
            className="w-12 h-12"
          />
        ))}
      </div>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/data-display/mask/mask-team.tsx",
  `import Mask from "@registry/components/react/data-display/mask";

const TEAM = [
  { name: "Sarah K.",  role: "CEO",             src: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" },
  { name: "Marcus L.", role: "CTO",             src: "https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" },
  { name: "Priya M.",  role: "Head of Design",  src: "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp" },
  { name: "Tom R.",    role: "Lead Engineer",   src: "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" },
];

export function MaskTeam() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
      {TEAM.map(({ name, role, src }) => (
        <div key={name} className="flex flex-col items-center gap-3">
          <Mask
            shape="squircle"
            src={src}
            alt={name}
            className="w-20 h-20"
          />
          <div className="text-center">
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-base-content/50">{role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
`,
);

write(
  "registry/demos/react/data-display/mask/mask-half.tsx",
  `import Mask from "@registry/components/react/data-display/mask";

export function MaskHalf() {
  return (
    <div className="flex items-center gap-1">
      <Mask shape="star-2" half="1" src="${IMG}" alt="half star 1" className="w-16 h-16 bg-yellow-400" />
      <Mask shape="star-2" half="2" src="${IMG}" alt="half star 2" className="w-16 h-16 bg-yellow-400" />
    </div>
  );
}
`,
);

console.log("\nDone!");
