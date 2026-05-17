// scripts/feedback/create-skeleton-demos.mjs
import fs from "fs";
import path from "path";

const ROOT = process.cwd();

function write(filePath, content) {
  const full = path.join(ROOT, filePath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, "utf-8");
  console.log(`✓  ${filePath}`);
}

write(
  "registry/demos/react/feedback/skeleton/skeleton-default.tsx",
  `import Skeleton from "@registry/components/react/feedback/skeleton";

export function SkeletonDefault() {
  return (
    <div className="flex flex-col gap-4 w-52">
      <Skeleton className="h-32 w-full rounded-xl" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/feedback/skeleton/skeleton-card.tsx",
  `import Skeleton from "@registry/components/react/feedback/skeleton";

export function SkeletonCard() {
  return (
    <div className="card bg-base-100 shadow-sm w-72">
      <div className="card-body gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="size-12 rounded-full shrink-0" />
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
        <Skeleton className="h-24 w-full rounded-lg" />
        <div className="flex gap-2">
          <Skeleton className="h-8 flex-1 rounded-btn" />
          <Skeleton className="h-8 flex-1 rounded-btn" />
        </div>
      </div>
    </div>
  );
}
`,
);

write(
  "registry/demos/react/feedback/skeleton/skeleton-text.tsx",
  `import Skeleton from "@registry/components/react/feedback/skeleton";

export function SkeletonText() {
  return (
      <Skeleton variant="text">Loading...</Skeleton>
  );
}
`,
);

console.log("\nDone!");
