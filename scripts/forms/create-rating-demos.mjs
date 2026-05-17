// scripts/forms/create-rating-demos.mjs
// Run: node scripts/forms/create-rating-demos.mjs

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
  "registry/demos/react/forms/rating/rating-default.tsx",
  `import { Rating } from "@registry/components/react/forms/rating";

export function RatingDefault() {
  return (
    <Rating name="rating-default" defaultValue={2}>
      <Rating.Item itemIndex={1} aria-label="1 star" />
      <Rating.Item itemIndex={2} aria-label="2 stars" />
      <Rating.Item itemIndex={3} aria-label="3 stars" />
      <Rating.Item itemIndex={4} aria-label="4 stars" />
      <Rating.Item itemIndex={5} aria-label="5 stars" />
    </Rating>
  );
}
`,
);

write(
  "registry/demos/react/forms/rating/rating-sizes.tsx",
  `import { Rating } from "@registry/components/react/forms/rating";

export function RatingSizes() {
  return (
    <div className="flex flex-col items-center gap-3">
      {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
        <Rating key={size} name={\`rating-size-\${size}\`} defaultValue={2} size={size}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Rating.Item key={n} itemIndex={n} aria-label={\`\${n} star\`} />
          ))}
        </Rating>
      ))}
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/rating/rating-colors.tsx",
  `import { Rating } from "@registry/components/react/forms/rating";

const COLOR_DEMOS = [
  { color: "bg-orange-400", label: "Orange" },
  { color: "bg-green-500",  label: "Green"  },
  { color: "bg-red-400",    label: "Red"    },
  { color: "bg-blue-400",   label: "Blue"   },
  { color: "bg-purple-400", label: "Purple" },
];

export function RatingColors() {
  return (
    <div className="flex flex-col gap-3">
      {COLOR_DEMOS.map(({ color, label }, i) => (
        <div key={color} className="flex items-center gap-4">
          <span className="w-16 text-sm text-base-content/60">{label}</span>
          <Rating name={\`rating-color-\${i}\`} defaultValue={3}>
            {[1, 2, 3, 4, 5].map((n) => (
              <Rating.Item
                key={n}
                itemIndex={n}
                mask="mask-star-2"
                color={color}
                aria-label={\`\${n} star\`}
              />
            ))}
          </Rating>
        </div>
      ))}
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/rating/rating-masks.tsx",
  `import { Rating, type RatingMask } from "@registry/components/react/forms/rating";

const MASK_DEMOS: { mask: RatingMask; color: string; label: string }[] = [
  { mask: "mask-star",   color: "bg-yellow-400", label: "Star"   },
  { mask: "mask-star-2", color: "bg-orange-400", label: "Star 2" },
  { mask: "mask-heart",  color: "bg-red-400",    label: "Heart"  },
];

export function RatingMasks() {
  return (
    <div className="flex flex-col gap-4">
      {MASK_DEMOS.map(({ mask, color, label }, i) => (
        <div key={mask} className="flex items-center gap-4">
          <span className="w-16 text-sm text-base-content/60">{label}</span>
          <Rating name={\`rating-mask-\${i}\`} defaultValue={2} size="lg">
            {[1, 2, 3, 4, 5].map((n) => (
              <Rating.Item
                key={n}
                itemIndex={n}
                mask={mask}
                color={color}
                aria-label={\`\${n} star\`}
              />
            ))}
          </Rating>
        </div>
      ))}
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/rating/rating-hidden.tsx",
  `import { Rating } from "@registry/components/react/forms/rating";

export function RatingHidden() {
  return (
    <Rating name="rating-hidden-demo" defaultValue={2} size="lg">
      <Rating.Hidden />
      {[1, 2, 3, 4, 5].map((n) => (
        <Rating.Item
          key={n}
          itemIndex={n}
          mask="mask-star-2"
          aria-label={\`\${n} star\`}
        />
      ))}
    </Rating>
  );
}
`,
);

write(
  "registry/demos/react/forms/rating/rating-half.tsx",
  `import * as React from "react";
import { Rating } from "@registry/components/react/forms/rating";

export function RatingHalf() {
  return (
    <Rating name="rating-half-demo" defaultValue={3} size="lg" half>
      <Rating.Hidden />
      {Array.from({ length: 5 }, (_, star) => (
        <React.Fragment key={star}>
          <Rating.Item
            itemIndex={star * 2 + 1}
            mask="mask-star-2"
            color="bg-green-500"
            halfSide="first"
            aria-label={\`\${star + 0.5} stars\`}
          />
          <Rating.Item
            itemIndex={star * 2 + 2}
            mask="mask-star-2"
            color="bg-green-500"
            halfSide="second"
            aria-label={\`\${star + 1} stars\`}
          />
        </React.Fragment>
      ))}
    </Rating>
  );
}
`,
);

write(
  "registry/demos/react/forms/rating/rating-controlled.tsx",
  `"use client";

import * as React from "react";
import { Rating } from "@registry/components/react/forms/rating";

export function RatingControlled() {
  const [value, setValue] = React.useState<number>(3);

  return (
    <div className="flex flex-col gap-4">
      <Rating
        name="rating-controlled"
        value={value}
        onValueChange={setValue}
        size="lg"
      >
        <Rating.Hidden onClick={() => setValue(0)} />
        {[1, 2, 3, 4, 5].map((n) => (
          <Rating.Item
            key={n}
            itemIndex={n}
            mask="mask-star-2"
            color="bg-orange-400"
            aria-label={\`\${n} star\`}
          />
        ))}
      </Rating>
      <p className="text-sm text-base-content/60">
        Selected: <strong>{value > 0 ? \`\${value} / 5\` : "none (cleared)"}</strong>
      </p>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/forms/rating/rating-readonly.tsx",
  `import { Rating } from "@registry/components/react/forms/rating";

export function RatingReadonly() {
  return (
    <Rating name="rating-readonly" value={3} readOnly size="lg">
      {[1, 2, 3, 4, 5].map((n) => (
        <Rating.Item
          key={n}
          itemIndex={n}
          mask="mask-star-2"
          color="bg-orange-400"
          aria-label={\`\${n} star\`}
        />
      ))}
    </Rating>
  );
}
`,
);

console.log("\nDone! Now run:\n  node scripts/build-rating-demos.mjs");
