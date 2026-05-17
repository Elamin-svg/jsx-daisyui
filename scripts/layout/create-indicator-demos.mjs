// scripts/layout/create-indicator-demos.mjs
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
  "registry/demos/react/layout/indicator/indicator-status.tsx",
  `import { Indicator } from "@registry/components/react/layout/indicator";

export function IndicatorStatus() {
  return (
    <Indicator>
      <Indicator.Item vertical="top" horizontal="end">
        <span className="status status-online size-3"></span>
      </Indicator.Item>
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        <img
          className="size-10 rounded-full"
          src="https://img.daisyui.com/images/profile/demo/2@94w.webp"
          alt="user"
        />
      </div>
    </Indicator>
  );
}
`,
);

write(
  "registry/demos/react/layout/indicator/indicator-badge.tsx",
  `import { Indicator } from "@registry/components/react/layout/indicator";

export function IndicatorBadge() {
  return (
    <Indicator>
      <Indicator.Item vertical="top" horizontal="end">
        <div className="badge badge-primary">New</div>
      </Indicator.Item>
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        Content
      </div>
    </Indicator>
  );
}
`,
);

write(
  "registry/demos/react/layout/indicator/indicator-button.tsx",
  `import { Indicator } from "@registry/components/react/layout/indicator";
import Button from "@registry/components/react/forms/button";

export function IndicatorButton() {
  return (
    <Indicator>
      <Indicator.Item vertical="top" horizontal="end">
        <span className="badge badge-secondary">12</span>
      </Indicator.Item>
      <Button>Inbox</Button>
    </Indicator>
  );
}
`,
);

write(
  "registry/demos/react/layout/indicator/indicator-placements.tsx",
  `import { Indicator } from "@registry/components/react/layout/indicator";

export function IndicatorPlacements() {
  return (
    <Indicator className="max-w-fit">
      <Indicator.Item vertical="top" horizontal="start">
        <span className="badge">↖︎</span>
      </Indicator.Item>
      <Indicator.Item vertical="top" horizontal="center">
        <span className="badge">↑</span>
      </Indicator.Item>
      <Indicator.Item vertical="top" horizontal="end">
        <span className="badge">↗︎</span>
      </Indicator.Item>
      <Indicator.Item vertical="middle" horizontal="start">
        <span className="badge">←</span>
      </Indicator.Item>
      <Indicator.Item vertical="middle" horizontal="center">
        <span className="badge">●</span>
      </Indicator.Item>
      <Indicator.Item vertical="middle" horizontal="end">
        <span className="badge">→</span>
      </Indicator.Item>
      <Indicator.Item vertical="bottom" horizontal="start">
        <span className="badge">↙︎</span>
      </Indicator.Item>
      <Indicator.Item vertical="bottom" horizontal="center">
        <span className="badge">↓</span>
      </Indicator.Item>
      <Indicator.Item vertical="bottom" horizontal="end">
        <span className="badge">↘︎</span>
      </Indicator.Item>
      <div className="grid w-60 h-32 bg-base-300 place-items-center">Box</div>
    </Indicator>
  );
}
`,
);

write(
  "registry/demos/react/layout/indicator/indicator-responsive.tsx",
  `import { Indicator } from "@registry/components/react/layout/indicator";

export function IndicatorResponsive() {
  return (
    <Indicator>
      <Indicator.Item vertical="top" horizontal="start" className="sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end">
        <span className="badge badge-secondary">Responsive</span>
      </Indicator.Item>
      <div className="grid w-32 h-32 rounded bg-base-300 place-items-center">
        Content
      </div>
    </Indicator>
  );
}
`,
);

console.log("\nDone!");
