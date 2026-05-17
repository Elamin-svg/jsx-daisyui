// scripts/layout/create-stack-demos.mjs
// Run: node scripts/layout/create-stack-demos.mjs

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
  "registry/demos/react/layout/stack/stack-default.tsx",
  `import Stack from "@registry/components/react/layout/stack";

export function StackDefault() {
  return (
    <Stack className="h-20 w-32">
      <div className="grid rounded-box bg-primary text-primary-content place-content-center">1</div>
      <div className="grid rounded-box bg-accent text-accent-content place-content-center">2</div>
      <div className="grid rounded-box bg-secondary text-secondary-content place-content-center">3</div>
    </Stack>
  );
}
`,
);

write(
  "registry/demos/react/layout/stack/stack-directions.tsx",
  `import Stack from "@registry/components/react/layout/stack";

const DIRS = ["bottom", "top", "start", "end"] as const;

function CardItem({ label }: { label: string }) {
  return (
    <div className="text-center border border-base-content card bg-base-100">
      <div className="card-body py-4 px-6">{label}</div>
    </div>
  );
}

export function StackDirections() {
  return (
    <div className="flex flex-wrap gap-12 justify-center items-end">
      {DIRS.map((align) => (
        <div key={align} className="flex flex-col items-center gap-3">
          <Stack align={align} className="size-28">
            <CardItem label="A" />
            <CardItem label="B" />
            <CardItem label="C" />
          </Stack>
          <span className="text-xs text-base-content/50">{align}</span>
        </div>
      ))}
    </div>
  );
}
`,
);

write(
  "registry/demos/react/layout/stack/stack-images.tsx",
  `import Stack from "@registry/components/react/layout/stack";

export function StackImages() {
  return (
    <Stack className="w-48">
      <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" alt="1" className="rounded-box" />
      <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp" alt="2" className="rounded-box" />
      <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"    alt="3" className="rounded-box" />
    </Stack>
  );
}
`,
);

write(
  "registry/demos/react/layout/stack/stack-notifications.tsx",
  `import Stack from "@registry/components/react/layout/stack";

const NOTIFICATIONS = [
  { title: "New message",    body: "Alex left a comment on your post.",      time: "2m ago"  },
  { title: "Pull request",   body: "feat/dashboard merged into main.",        time: "14m ago" },
  { title: "Deployment",     body: "Production deploy completed successfully.", time: "1h ago"  },
];

export function StackNotifications() {
  return (
    <Stack className="w-80">
      {NOTIFICATIONS.map(({ title, body, time }) => (
        <div key={title} className="card bg-base-100 shadow-md w-full">
          <div className="card-body py-4 gap-1">
            <div className="flex items-center justify-between">
              <h3 className="card-title text-sm">{title}</h3>
              <span className="text-xs text-base-content/40">{time}</span>
            </div>
            <p className="text-sm text-base-content/60">{body}</p>
          </div>
        </div>
      ))}
    </Stack>
  );
}
`,
);

write(
  "registry/demos/react/layout/stack/stack-cards.tsx",
  `import Stack from "@registry/components/react/layout/stack";

export function StackCards() {
  return (
    <Stack>
      <div className="card bg-base-200 text-center shadow-md">
        <div className="card-body">A</div>
      </div>
      <div className="card bg-base-200 text-center shadow">
        <div className="card-body">B</div>
      </div>
      <div className="card bg-base-200 text-center shadow-sm">
        <div className="card-body">C</div>
      </div>
    </Stack>
  );
}
`,
);

write(
  "registry/demos/react/layout/stack/stack-pricing.tsx",
  `import Stack from "@registry/components/react/layout/stack";
import Button from "@registry/components/react/forms/button";

export function StackPricing() {
  return (
    <Stack className="w-72">
      <div className="card bg-base-300 shadow-sm">
        <div className="card-body py-5">
          <p className="text-sm text-base-content/40 font-medium">Enterprise</p>
          <p className="text-2xl font-bold">Custom</p>
        </div>
      </div>
      <div className="card bg-base-200 shadow-md">
        <div className="card-body py-5">
          <p className="text-sm text-base-content/40 font-medium">Pro</p>
          <p className="text-2xl font-bold">$49 <span className="text-sm font-normal text-base-content/50">/ mo</span></p>
        </div>
      </div>
      <div className="card bg-base-100 shadow-xl border border-primary/20">
        <div className="card-body py-5">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-primary">Starter</p>
            <span className="badge badge-primary badge-sm">Popular</span>
          </div>
          <p className="text-3xl font-extrabold">$9 <span className="text-sm font-normal text-base-content/50">/ mo</span></p>
          <p className="text-sm text-base-content/60">Everything you need to get started.</p>
          <Button color="primary" size="sm" className="mt-2">Get started</Button>
        </div>
      </div>
    </Stack>
  );
}
`,
);

console.log("\nDone!");
